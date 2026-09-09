import os
from pydantic_settings import BaseSettings, SettingsConfigDict
from pathlib import Path

class Settings(BaseSettings):
    # API Keys (loaded from .env or environment)
    OPENAI_API_KEY: str = ""
    OPENAI_BASE_URL: str = "https://openrouter.ai/api/v1"
    JINA_API_KEY: str = ""
    CHROMA_API_KEY: str = ""
    CHROMA_TENANT: str = ""
    CHROMA_DATABASE: str = "rag-system"
    CHROMA_MODE: str = "local"  # "local" or "cloud"
    
    # Models
    EMBEDDING_MODEL: str = "jina-embeddings-v5-text-small"
    RERANKER_MODEL: str = "jina-reranker-v2-base-multilingual"
    GENERATION_MODEL: str = "openai/gpt-4o-mini"
    
    # Chunking
    CHUNK_SIZE: int = 500
    CHUNK_OVERLAP: int = 50
    
    # Retrieval
    RETRIEVAL_TOP_K: int = 12
    RERANK_TOP_N: int = 3
    
    # Directories (Auto-detects Azure App Service persistent storage /home/data or local data/)
    BASE_DIR: Path = Path(__file__).resolve().parent.parent
    DATA_DIR: Path = Path(os.getenv("DATA_DIR", "/home/data")) if os.getenv("WEBSITE_SITE_NAME") else BASE_DIR / "data"
    UPLOAD_DIR: Path = DATA_DIR / "uploads"
    DB_DIR: Path = DATA_DIR / "db"

    model_config = SettingsConfigDict(env_file=".env", extra="ignore")

settings = Settings()

# Ensure directories exist
settings.UPLOAD_DIR.mkdir(parents=True, exist_ok=True)
settings.DB_DIR.mkdir(parents=True, exist_ok=True)

