import os
from pathlib import Path
from typing import List
from langchain_core.documents import Document
from langchain_community.document_loaders import PyPDFLoader, TextLoader, Docx2txtLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from app.config import settings
from app.utils.logger import get_logger

logger = get_logger(__name__)

class DocumentProcessor:
    def __init__(self):
        self.text_splitter = RecursiveCharacterTextSplitter(
            chunk_size=settings.CHUNK_SIZE,
            chunk_overlap=settings.CHUNK_OVERLAP,
            separators=["\n\n", "\n", " ", ""]
        )

    def extract_text_content(self, file_path: str) -> str:
        """Extracts readable text content directly from PDF, DOCX, TXT, or Image files."""
        ext = Path(file_path).suffix.lower()
        filename = Path(file_path).name
        try:
            if ext == ".pdf":
                try:
                    import pymupdf
                    doc = pymupdf.open(file_path)
                    pages_text = [page.get_text() for page in doc if page.get_text().strip()]
                    text = "\n\n".join(pages_text)
                    if text.strip():
                        return text
                except Exception as e:
                    logger.warning(f"pymupdf extraction failed for {file_path}: {e}")
                try:
                    from pypdf import PdfReader
                    reader = PdfReader(file_path)
                    text = "\n\n".join([p.extract_text() for p in reader.pages if p.extract_text()])
                    if text.strip():
                        return text
                except Exception as e:
                    logger.warning(f"pypdf extraction failed for {file_path}: {e}")
                try:
                    loader = PyPDFLoader(file_path)
                    docs = loader.load()
                    text = "\n\n".join(d.page_content for d in docs)
                    if text.strip():
                        return text
                except Exception as e:
                    logger.warning(f"PyPDFLoader failed for {file_path}: {e}")

                return f"[Warning: No selectable text could be extracted from {filename}. If this is a scanned PDF/image, please convert it to a searchable text document.]"


            elif ext in [".docx", ".doc"]:
                try:
                    import docx
                    doc = docx.Document(file_path)
                    text = "\n".join([p.text for p in doc.paragraphs if p.text.strip()])
                    if text.strip():
                        return text
                except Exception as e:
                    logger.warning(f"python-docx extraction failed for {file_path}: {e}")
                loader = Docx2txtLoader(file_path)
                docs = loader.load()
                return "\n\n".join(d.page_content for d in docs)

            elif ext == ".txt":
                with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
                    return f.read()
            else:
                logger.warning(f"Unsupported file type: {ext}")
                return f"[Unsupported file type: {filename}. Please upload PDF, Word, or TXT documents only.]"
        except Exception as e:
            logger.error(f"Error extracting text from {file_path}: {e}")
            return f"[Error processing file {filename}: {str(e)}]"

    def process_file(self, file_path: str) -> List[Document]:
        """Loads a supported file type (PDF, DOCX, TXT, Image) and splits it into chunks."""
        ext = Path(file_path).suffix.lower()
        filename = Path(file_path).name
        documents = []
        
        try:
            extracted_text = self.extract_text_content(file_path)
            if extracted_text and not extracted_text.startswith("[Error"):
                documents = [Document(page_content=extracted_text, metadata={"source_file": filename})]
            else:
                logger.warning(f"Could not extract content from {file_path}")
                return []
            
            logger.info(f"Loaded content from {file_path}")
            chunks = self.text_splitter.split_documents(documents)
            logger.info(f"Split into {len(chunks)} chunks.")
            return chunks
        except Exception as e:
            logger.error(f"Error processing file {file_path}: {e}")
            return []

