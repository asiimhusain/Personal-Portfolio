from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse, RedirectResponse
from app.api.routes import router
from fastapi.middleware.cors import CORSMiddleware
import os

app = FastAPI(
    title="Re-ranking RAG API",
    description="A production-ready Retrieval-Augmented Generation API with two-stage retrieval (Vector Search + Cross-Encoder Reranking).",
    version="1.0.0"
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

# Mount static frontend
frontend_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))

# Serve portfolio static directories
app.mount("/css", StaticFiles(directory=os.path.join(frontend_dir, "css")), name="css")
app.mount("/js", StaticFiles(directory=os.path.join(frontend_dir, "js")), name="js")
app.mount("/images", StaticFiles(directory=os.path.join(frontend_dir, "images")), name="images")
app.mount("/files", StaticFiles(directory=os.path.join(frontend_dir, "files")), name="files")
app.mount("/certificate", StaticFiles(directory=os.path.join(frontend_dir, "certificate")), name="certificate")
app.mount("/Notes", StaticFiles(directory=os.path.join(frontend_dir, "Notes")), name="Notes")

@app.get("/")
def read_root():
    return FileResponse(os.path.join(frontend_dir, "index.html"))

@app.get("/chat")
def read_chat():
    return RedirectResponse(url="/")

@app.get("/documents")
def read_documents():
    return RedirectResponse(url="/")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app.main:app", host="0.0.0.0", port=8000, reload=True)
