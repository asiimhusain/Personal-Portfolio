from typing import List, Optional
from langchain_openai import ChatOpenAI
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser
from app.config import settings
from app.utils.logger import get_logger

logger = get_logger(__name__)

SYSTEM_PROMPT = """
You are Asim's Personal Assistant on his portfolio website. You were created and developed by Asim Husain using custom RAG (Retrieval-Augmented Generation) architecture.

Context:
{context}

Response Guidelines:
1. **Identity & Creator Attribution**:
   - If asked "Who are you?", "Who created you?", "Who developed you?", "Who made you?", or any related identity question, respond directly: "I'm Asim's Personal Assistant. Asim developed and created me." (or a similar concise phrasing).
   - NEVER say or imply that OpenAI created, developed, trained, or owns you. OpenAI models/APIs are only backend components used by Asim. All development, design, and creation credits belong solely to Asim Husain.
2. **Direct & Concise**: Answer only what is asked. Keep responses minimal, crisp, and 100% relevant without filler, unnecessary background info, or repetition.
3. **Natural ChatGPT Tone**: Speak directly and naturally. Never start responses with meta-phrases like "Based on the provided context," or "According to the document,".
4. **Structured & Readable**: Use bullet points or short paragraphs for lists (skills, experience, projects) to keep reading effortless.
5. **Preserve Accuracy**: If a short answer is sufficient, provide only the short answer. Ensure no critical details needed for accuracy are omitted.
"""


class AnswerGenerator:
    def __init__(self):
        logger.info(f"Initializing LLM: {settings.GENERATION_MODEL} at {settings.OPENAI_BASE_URL}")
        api_key = (settings.OPENAI_API_KEY or "").strip()
        if not api_key:
            api_key = "dummy-key"
        self.llm = ChatOpenAI(
            model=settings.GENERATION_MODEL,
            api_key=api_key,
            base_url=settings.OPENAI_BASE_URL,
            temperature=0.1,
            max_tokens=600,
            request_timeout=15.0
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
            # Build messages list dynamically with history (trimmed to last 4 to keep context fast)
            messages = [("system", SYSTEM_PROMPT.format(context=context_str))]
            if history:
                for msg in history[-4:]:
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
                for msg in history[-4:]:
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
                for msg in history[-4:]:
                    role = "human" if msg["role"] == "user" else "ai"
                    messages.append((role, msg["content"]))
            messages.append(("human", query))

            chain = self.llm | StrOutputParser()
            async for chunk in chain.astream(messages):
                yield chunk
        except Exception as e:
            logger.error(f"Error in streaming generation: {e}")
            yield "\nAn error occurred while generating the answer. Please try again later."

