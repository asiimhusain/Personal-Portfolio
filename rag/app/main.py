import os
import shutil
from pathlib import Path
from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware
from app.api.routes import router
from app.config import settings
from app.utils.logger import get_logger

logger = get_logger(__name__)

def initialize_seed_data():
    """Auto-seeds pre-built local ChromaDB vectors and chat history into persistent storage on boot (Azure/Docker)."""
    seed_dir = settings.BASE_DIR / "data_seed"
    target_dir = settings.DATA_DIR

    # Ensure target persistent directories exist
    settings.UPLOAD_DIR.mkdir(parents=True, exist_ok=True)
    settings.DB_DIR.mkdir(parents=True, exist_ok=True)

    if seed_dir.exists():
        logger.info(f"Checking seed data in {seed_dir} for target persistent storage {target_dir}...")
        for sub in ["db", "uploads"]:
            seed_sub = seed_dir / sub
            target_sub = target_dir / sub
            if seed_sub.exists():
                for item in seed_sub.iterdir():
                    dest = target_sub / item.name
                    if not dest.exists():
                        try:
                            if item.is_dir():
                                shutil.copytree(item, dest)
                            else:
                                shutil.copy2(item, dest)
                            logger.info(f"Initialized seed data item: {item.name} -> {dest}")
                        except Exception as e:
                            logger.warning(f"Could not copy seed item {item.name}: {e}")

@asynccontextmanager
async def lifespan(app: FastAPI):
    initialize_seed_data()
    yield

app = FastAPI(
    title="Re-ranking RAG API",
    description="A production-ready Retrieval-Augmented Generation API with two-stage retrieval (Vector Search + Cross-Encoder Reranking).",
    version="1.0.0",
    lifespan=lifespan
)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router, prefix="/api/v1")

# Mount static frontend if available
frontend_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "frontend"))
root_portfolio_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))

if os.path.exists(frontend_dir):
    app.mount("/static", StaticFiles(directory=frontend_dir), name="static")
    @app.get("/")
    def read_root():
        return FileResponse(os.path.join(frontend_dir, "index.html"))
    @app.get("/chat")
    def read_chat():
        return FileResponse(os.path.join(frontend_dir, "chat.html"))
    @app.get("/documents")
    def read_documents():
        return FileResponse(os.path.join(frontend_dir, "documents.html"))
elif os.path.exists(os.path.join(root_portfolio_dir, "index.html")):
    if os.path.exists(os.path.join(root_portfolio_dir, "css")):
        app.mount("/css", StaticFiles(directory=os.path.join(root_portfolio_dir, "css")), name="css")
    if os.path.exists(os.path.join(root_portfolio_dir, "js")):
        app.mount("/js", StaticFiles(directory=os.path.join(root_portfolio_dir, "js")), name="js")
    if os.path.exists(os.path.join(root_portfolio_dir, "images")):
        app.mount("/images", StaticFiles(directory=os.path.join(root_portfolio_dir, "images")), name="images")
    @app.get("/")
    def read_root():
        return FileResponse(os.path.join(root_portfolio_dir, "index.html"))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app.main:app", host="127.0.0.1", port=8000, reload=True)
