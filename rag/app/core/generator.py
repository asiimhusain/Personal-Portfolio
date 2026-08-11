from typing import List, Optional
from langchain_openai import ChatOpenAI
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser
from app.config import settings
from app.utils.logger import get_logger

logger = get_logger(__name__)

SYSTEM_PROMPT = """
You are a highly precise and concise AI assistant. Your task is to answer the user's question using ONLY the provided context.

Context:
{context}

CRITICAL INSTRUCTIONS:
1. Provide a highly focused, direct, and short response.
2. Answer ONLY the specific question asked. Do NOT include unrelated background, extra details, or surrounding context.
3. If the user asks about a specific topic (e.g. only "skills" or only "experience"), describe ONLY that topic. Do NOT summarize the entire resume or other sections.
4. Do NOT cite any sources, files, or document names in your response.
5. Do NOT start your response with "Based on the context," or similar phrases. Answer directly and naturally.
"""

class AnswerGenerator:
    def __init__(self):
        logger.info(f"Initializing LLM: {settings.GENERATION_MODEL} at {settings.OPENAI_BASE_URL}")
        self.llm = ChatOpenAI(
            model=settings.GENERATION_MODEL,
            api_key=settings.OPENAI_API_KEY,
            base_url=settings.OPENAI_BASE_URL,
            temperature=0.0
        )
        self.prompt = ChatPromptTemplate.from_messages([
            ("system", SYSTEM_PROMPT),
            ("human", "{question}")
        ])
        self.chain = self.prompt | self.llm | StrOutputParser()

    def generate(self, query: str, context_docs: List[dict], history: Optional[List[dict]] = None) -> str:
        # Format context
        context_texts = []
        for i, doc in enumerate(context_docs):
            source = doc.get("metadata", {}).get("source_file", "Unknown")
            context_texts.append(f"--- Document {i+1} (Source: {source}) ---\n{doc['content']}\n")
        
        context_str = "\n".join(context_texts)
        
        logger.info("Sending query to LLM...")
        try:
            # Build messages list dynamically with history
            messages = [("system", SYSTEM_PROMPT.format(context=context_str))]
            if history:
                for msg in history:
                    role = "human" if msg["role"] == "user" else "ai"
                    messages.append((role, msg["content"]))
            messages.append(("human", query))

            chain = self.llm | StrOutputParser()
            answer = chain.invoke(messages)
            return answer
        except Exception as e:
            logger.error(f"Error generating answer: {e}")
            return "An error occurred while generating the answer. Please try again later."

    async def generate_async(self, query: str, context_docs: List[dict], history: Optional[List[dict]] = None) -> str:
        context_texts = []
        for i, doc in enumerate(context_docs):
            source = doc.get("metadata", {}).get("source_file", "Unknown")
            context_texts.append(f"--- Document {i+1} (Source: {source}) ---\n{doc['content']}\n")
        
        context_str = "\n".join(context_texts)
        
        logger.info("Sending query to LLM (async)...")
        try:
            messages = [("system", SYSTEM_PROMPT.format(context=context_str))]
            if history:
                for msg in history:
                    role = "human" if msg["role"] == "user" else "ai"
                    messages.append((role, msg["content"]))
            messages.append(("human", query))

            chain = self.llm | StrOutputParser()
            answer = await chain.ainvoke(messages)
            return answer
        except Exception as e:
            logger.error(f"Error generating answer: {e}")
            return "An error occurred while generating the answer. Please try again later."

    async def generate_stream(self, query: str, context_docs: List[dict], history: Optional[List[dict]] = None):
        context_texts = []
        for i, doc in enumerate(context_docs):
            source = doc.get("metadata", {}).get("source_file", "Unknown")
            context_texts.append(f"--- Document {i+1} (Source: {source}) ---\n{doc['content']}\n")
        
        context_str = "\n".join(context_texts)
        
        logger.info("Streaming query to LLM...")
        try:
            messages = [("system", SYSTEM_PROMPT.format(context=context_str))]
            if history:
                for msg in history:
                    role = "human" if msg["role"] == "user" else "ai"
                    messages.append((role, msg["content"]))
            messages.append(("human", query))

            chain = self.llm | StrOutputParser()
            async for chunk in chain.astream(messages):
                yield chunk
        except Exception as e:
            logger.error(f"Error in streaming generation: {e}")
            yield "\nAn error occurred while generating the answer. Please try again later."
