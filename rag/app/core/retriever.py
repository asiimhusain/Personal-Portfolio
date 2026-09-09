import httpx
import asyncio
from typing import List
from langchain_core.documents import Document
from app.core.vector_store import VectorStoreManager
from app.config import settings
from app.utils.logger import get_logger

logger = get_logger(__name__)

class RetrieverReranker:
    def __init__(self, vector_store: VectorStoreManager):
        self.vector_store = vector_store
        logger.info(f"Initializing reranker model: {settings.RERANKER_MODEL}")
        self.reranker_url = "https://api.jina.ai/v1/rerank"
        self.jina_key = (settings.JINA_API_KEY or "").strip()
        self.headers = {
            "Content-Type": "application/json"
        }
        if self.jina_key:
            self.headers["Authorization"] = f"Bearer {self.jina_key}"
        limits = httpx.Limits(max_keepalive_connections=20, max_connections=50)
        self.client = httpx.Client(headers=self.headers, timeout=2.5, limits=limits)
        self.async_client = httpx.AsyncClient(headers=self.headers, timeout=2.5, limits=limits)

    def retrieve_and_rerank(self, query: str, top_k: int = None, top_n: int = None) -> List[dict]:
        k = top_k or settings.RETRIEVAL_TOP_K
        n = top_n or settings.RERANK_TOP_N

        # Stage 1: Vector Search
        retrieved_docs_with_scores = self.vector_store.similarity_search_with_score(query, top_k=k)
        
        if not retrieved_docs_with_scores:
            return []

        if len(retrieved_docs_with_scores) <= n:
            return [
                {"content": doc.page_content, "metadata": doc.metadata, "score": float(score or 0.0)}
                for doc, score in retrieved_docs_with_scores
            ]

        doc_objects = [doc for doc, _ in retrieved_docs_with_scores]
        doc_texts = [doc.page_content for doc in doc_objects]

        # Stage 2: Reranking — skip for short/simple queries (≤5 words) to save ~500-1500ms
        word_count = len(query.split())
        if word_count <= 5:
            logger.info(f"Short query ({word_count} words): skipping reranker, using vector search results.")
            return [
                {"content": doc.page_content, "metadata": doc.metadata, "score": float(score or 0.0)}
                for doc, score in retrieved_docs_with_scores[:n]
            ]

        try:
            data = {
                "model": settings.RERANKER_MODEL,
                "query": query,
                "top_n": n,
                "documents": doc_texts,
                "return_documents": False
            }
            
            response = self.client.post(self.reranker_url, json=data)
            response.raise_for_status()
            
            reranked_results = response.json().get("results", [])

            final_docs = []
            for result in reranked_results:
                original_idx = result["index"]
                doc = doc_objects[original_idx]
                final_docs.append({
                    "content": doc.page_content,
                    "metadata": doc.metadata,
                    "score": float(result["relevance_score"])
                })

            return final_docs
        except Exception as e:
            logger.warning(f"Reranker API skipped or timed out ({e}). Using vector search results.")
            return [
                {"content": doc.page_content, "metadata": doc.metadata, "score": float(score or 0.0)}
                for doc, score in retrieved_docs_with_scores[:n]
            ]

    async def async_retrieve_and_rerank(self, query: str, top_k: int = None, top_n: int = None) -> List[dict]:
        k = top_k or settings.RETRIEVAL_TOP_K
        n = top_n or settings.RERANK_TOP_N

        # Stage 1: Vector Search
        retrieved_docs_with_scores = await self.vector_store.asimilarity_search_with_score(query, top_k=k)
        
        if not retrieved_docs_with_scores:
            return []

        if len(retrieved_docs_with_scores) <= n:
            return [
                {"content": doc.page_content, "metadata": doc.metadata, "score": float(score or 0.0)}
                for doc, score in retrieved_docs_with_scores
            ]

        doc_objects = [doc for doc, _ in retrieved_docs_with_scores]
        doc_texts = [doc.page_content for doc in doc_objects]

        # Stage 2: Fast Reranking — skip for short/simple queries (≤5 words) to save ~500-1500ms
        word_count = len(query.split())
        if word_count <= 5:
            logger.info(f"Short query ({word_count} words): skipping async reranker, using vector search results.")
            return [
                {"content": doc.page_content, "metadata": doc.metadata, "score": float(score or 0.0)}
                for doc, score in retrieved_docs_with_scores[:n]
            ]

        # Stage 2: Fast Reranking with 1.2s strict timeout
        try:
            data = {
                "model": settings.RERANKER_MODEL,
                "query": query,
                "top_n": n,
                "documents": doc_texts,
                "return_documents": False
            }
            
            response = await asyncio.wait_for(
                self.async_client.post(self.reranker_url, json=data),
                timeout=1.2
            )
            response.raise_for_status()
            
            reranked_results = response.json().get("results", [])

            final_docs = []
            for result in reranked_results:
                original_idx = result["index"]
                doc = doc_objects[original_idx]
                final_docs.append({
                    "content": doc.page_content,
                    "metadata": doc.metadata,
                    "score": float(result["relevance_score"])
                })

            return final_docs
        except Exception as e:
            logger.warning(f"Async Reranker API timed out or skipped ({e}). Returning fast vector search results.")
            return [
                {"content": doc.page_content, "metadata": doc.metadata, "score": float(score or 0.0)}
                for doc, score in retrieved_docs_with_scores[:n]
            ]



