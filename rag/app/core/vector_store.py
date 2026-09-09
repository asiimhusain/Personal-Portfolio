import httpx
import asyncio
from functools import lru_cache
from collections import OrderedDict
from typing import List, Dict, Tuple, Optional
from langchain_core.documents import Document
from langchain_core.embeddings import Embeddings
from langchain_chroma import Chroma
from app.config import settings
from app.utils.logger import get_logger

logger = get_logger(__name__)

# Global in-memory LRU cache for query embeddings to ensure 0ms latency for repeated queries
_EMBEDDING_CACHE: OrderedDict[str, List[float]] = OrderedDict()
_MAX_CACHE_SIZE = 2048

def _get_cached_embedding(key: str) -> Optional[List[float]]:
    if key in _EMBEDDING_CACHE:
        _EMBEDDING_CACHE.move_to_end(key)
        return _EMBEDDING_CACHE[key]
    return None

def _put_cached_embedding(key: str, value: List[float]):
    if key in _EMBEDDING_CACHE:
        _EMBEDDING_CACHE.move_to_end(key)
    _EMBEDDING_CACHE[key] = value
    if len(_EMBEDDING_CACHE) > _MAX_CACHE_SIZE:
        _EMBEDDING_CACHE.popitem(last=False)  # Evict oldest LRU entry

class JinaEmbeddings(Embeddings):
    def __init__(self, api_key: str, model: str):
        self.api_key = (api_key or "").strip()
        self.model = model
        self.url = "https://api.jina.ai/v1/embeddings"
        self.headers = {
            "Content-Type": "application/json"
        }
        if self.api_key:
            self.headers["Authorization"] = f"Bearer {self.api_key}"
        # Keep-alive clients with connection pooling
        limits = httpx.Limits(max_keepalive_connections=20, max_connections=50)
        self.client = httpx.Client(headers=self.headers, timeout=8.0, limits=limits)
        self.async_client = httpx.AsyncClient(headers=self.headers, timeout=8.0, limits=limits)

    def embed_documents(self, texts: List[str], task: str = "retrieval.passage") -> List[List[float]]:
        if not texts:
            return []
        if not self.api_key:
            logger.error("Jina API key is missing. Please set JINA_API_KEY in your .env file.")
            raise ValueError("JINA_API_KEY is missing. Please configure JINA_API_KEY in your .env file.")
        
        batch_size = 32
        embeddings = []
        for i in range(0, len(texts), batch_size):
            batch = texts[i:i + batch_size]
            data = {
                "model": self.model,
                "task": task,
                "normalized": True,
                "input": batch
            }
            res = self.client.post(self.url, json=data)
            try:
                res.raise_for_status()
            except httpx.HTTPStatusError as err:
                detail = res.text
                logger.error(f"Jina Embedding API error {res.status_code}: {detail}")
                if res.status_code == 403 or "INSUFFICIENT_BALANCE" in detail:
                    raise RuntimeError("Jina API Error: Insufficient account balance. Please top up your JINA_API_KEY account balance.") from err
                raise RuntimeError(f"Jina API Error ({res.status_code}): {detail[:200]}") from err
            result = res.json()
            embeddings.extend([item["embedding"] for item in result["data"]])

        return embeddings

    async def aembed_documents(self, texts: List[str], task: str = "retrieval.passage") -> List[List[float]]:
        if not texts:
            return []
        if not self.api_key:
            logger.error("Jina API key is missing. Please set JINA_API_KEY in your .env file.")
            raise ValueError("JINA_API_KEY is missing. Please configure JINA_API_KEY in your .env file.")
        
        batch_size = 32
        batches = [texts[i:i + batch_size] for i in range(0, len(texts), batch_size)]

        async def fetch_batch(batch):
            data = {
                "model": self.model,
                "task": task,
                "normalized": True,
                "input": batch
            }
            res = await self.async_client.post(self.url, json=data)
            try:
                res.raise_for_status()
            except httpx.HTTPStatusError as err:
                detail = res.text
                logger.error(f"Jina Async Embedding API error {res.status_code}: {detail}")
                if res.status_code == 403 or "INSUFFICIENT_BALANCE" in detail:
                    raise RuntimeError("Jina API Error: Insufficient account balance.") from err
                raise RuntimeError(f"Jina API Error ({res.status_code}): {detail[:200]}") from err
            result = res.json()
            return [item["embedding"] for item in result["data"]]

        batch_results = await asyncio.gather(*[fetch_batch(b) for b in batches])
        embeddings = []
        for r in batch_results:
            embeddings.extend(r)
        return embeddings

    def embed_query(self, text: str) -> List[float]:
        cleaned = text.strip()
        cached = _get_cached_embedding(cleaned)
        if cached is not None:
            return cached
        
        result = self.embed_documents([cleaned], task="retrieval.query")[0]
        _put_cached_embedding(cleaned, result)
        return result

    async def aembed_query(self, text: str) -> List[float]:
        cleaned = text.strip()
        cached = _get_cached_embedding(cleaned)
        if cached is not None:
            return cached
        
        res = await self.aembed_documents([cleaned], task="retrieval.query")
        result = res[0]
        _put_cached_embedding(cleaned, result)
        return result

class VectorStoreManager:
    def __init__(self):
        logger.info(f"Initializing embedding model: {settings.EMBEDDING_MODEL}")
        self.embeddings = JinaEmbeddings(
            api_key=settings.JINA_API_KEY,
            model=settings.EMBEDDING_MODEL
        )
        self.active_mode = settings.CHROMA_MODE
        self.vector_store = self._init_vector_store(self.active_mode)

    def _init_cloud_store(self):
        import chromadb
        if not settings.CHROMA_API_KEY or not settings.CHROMA_TENANT:
            raise ValueError("Chroma Cloud API key or Tenant ID missing.")
        logger.info("Attempting to connect to Chroma Cloud...")
        chroma_client = chromadb.CloudClient(
            api_key=settings.CHROMA_API_KEY,
            tenant=settings.CHROMA_TENANT,
            database=settings.CHROMA_DATABASE
        )
        store = Chroma(
            client=chroma_client,
            collection_name="rag_collection",
            embedding_function=self.embeddings
        )
        store._client.heartbeat()
        logger.info("Successfully connected to online Chroma Cloud.")
        return store

    def _init_local_store(self):
        logger.info("Using OFFLINE local ChromaDB for instant vector search.")
        return Chroma(
            collection_name="rag_collection",
            embedding_function=self.embeddings,
            persist_directory=str(settings.DB_DIR)
        )

    def _init_vector_store(self, preferred_mode: str):
        if preferred_mode == "local":
            try:
                store = self._init_local_store()
                self.active_mode = "local"
                return store
            except Exception as e:
                logger.warning(f"Local ChromaDB initialization failed ({e}). Attempting fallback to Chroma Cloud...")
                try:
                    store = self._init_cloud_store()
                    self.active_mode = "cloud"
                    return store
                except Exception as cloud_err:
                    logger.error(f"Both Local and Cloud ChromaDB initialization failed: {cloud_err}")
                    raise e
        else:
            try:
                store = self._init_cloud_store()
                self.active_mode = "cloud"
                return store
            except Exception as e:
                logger.warning(f"Online ChromaDB failed ({e}). Falling back to OFFLINE local ChromaDB.")
                store = self._init_local_store()
                self.active_mode = "local"
                return store

    def _switch_to_fallback(self):
        fallback_mode = "cloud" if self.active_mode == "local" else "local"
        logger.warning(f"Active ChromaDB ({self.active_mode}) failed during operation. Switching to fallback ({fallback_mode}).")
        try:
            self.vector_store = self._init_vector_store(fallback_mode)
        except Exception as err:
            logger.error(f"Fallback to {fallback_mode} failed: {err}")

    def add_documents(self, documents: List[Document]):
        if not documents:
            return
        try:
            self.vector_store.add_documents(documents)
            logger.info(f"Added {len(documents)} documents to vector store ({self.active_mode}).")
        except Exception as e:
            logger.warning(f"Failed to add documents to {self.active_mode} vector store ({e}). Attempting fallback...")
            self._switch_to_fallback()
            self.vector_store.add_documents(documents)

    def count(self) -> int:
        try:
            return self.vector_store._collection.count()
        except Exception:
            return 0

    def similarity_search_with_score(self, query: str, top_k: int) -> List[Tuple[Document, float]]:
        try:
            return self.vector_store.similarity_search_with_score(query, k=top_k)
        except Exception as e:
            logger.warning(f"Similarity search failed on {self.active_mode} vector store ({e}). Attempting fallback...")
            self._switch_to_fallback()
            return self.vector_store.similarity_search_with_score(query, k=top_k)

    async def asimilarity_search_with_score(self, query: str, top_k: int) -> List[Tuple[Document, float]]:
        try:
            return await self.vector_store.asimilarity_search_with_score(query, k=top_k)
        except Exception as e:
            logger.warning(f"Async similarity search failed on {self.active_mode} vector store ({e}). Attempting fallback...")
            self._switch_to_fallback()
            return await self.vector_store.asimilarity_search_with_score(query, k=top_k)


