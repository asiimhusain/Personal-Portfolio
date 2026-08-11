/**
 * RAG Chat Agent UI Controller
 * Dedicated script for managing the AI chatbot popup and backend API connection.
 */

(function () {
    'use strict';

    // API Host configuration: Local vs Production Container App
    const API_BASE_URL = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
        ? 'http://localhost:8000/api/v1'
        : 'https://ragsystem.grayground-1f565d06.centralindia.azurecontainerapps.io/api/v1';

    let currentSessionId = sessionStorage.getItem('rag_session_id') || null;

    // DOM Elements
    let chatTriggerBtn = null;
    let chatCloseBtn = null;
    let chatContainer = null;
    let chatMessages = null;
    let chatInput = null;
    let sendBtn = null;
    let statusIndicator = null;

    // Make the chat widget draggable/floating
    function makeDraggable(elmnt, handle) {
        let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

        handle.style.cursor = 'move';
        handle.addEventListener('mousedown', dragMouseDown);

        function dragMouseDown(e) {
            // Don't drag if clicking buttons, status indicators or scrollbars
            if (e.target.closest('#rag-chat-close-btn') || e.target.closest('.rag-status-indicator')) {
                return;
            }
            if (window.innerWidth <= 576) {
                return; // Do not drag on mobile fullscreen
            }

            e.preventDefault();
            pos3 = e.clientX;
            pos4 = e.clientY;

            // Retrieve current coordinates
            const rect = elmnt.getBoundingClientRect();
            elmnt.style.bottom = 'auto';
            elmnt.style.right = 'auto';
            elmnt.style.left = rect.left + 'px';
            elmnt.style.top = rect.top + 'px';

            document.addEventListener('mouseup', closeDragElement);
            document.addEventListener('mousemove', elementDrag);
        }

        function elementDrag(e) {
            e.preventDefault();
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;

            let newTop = elmnt.offsetTop - pos2;
            let newLeft = elmnt.offsetLeft - pos1;

            // Constrain within viewport
            const rect = elmnt.getBoundingClientRect();
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;

            newLeft = Math.max(0, Math.min(newLeft, viewportWidth - rect.width));
            newTop = Math.max(0, Math.min(newTop, viewportHeight - rect.height));

            elmnt.style.top = newTop + 'px';
            elmnt.style.left = newLeft + 'px';
        }

        function closeDragElement() {
            document.removeEventListener('mouseup', closeDragElement);
            document.removeEventListener('mousemove', elementDrag);
        }
    }

    // Initialize Widget
    function init() {
        chatTriggerBtn = document.getElementById('agent-nav-btn');
        chatCloseBtn = document.getElementById('rag-chat-close-btn');
        chatContainer = document.getElementById('rag-chat-container');
        chatMessages = document.getElementById('rag-chat-messages');
        chatInput = document.getElementById('rag-chat-input');
        sendBtn = document.getElementById('rag-chat-send-btn');
        statusIndicator = document.getElementById('rag-status-indicator');

        if (!chatTriggerBtn || !chatCloseBtn || !chatContainer || !chatMessages || !chatInput || !sendBtn) {
            console.error('RAG Chat Widget: Required HTML elements not found.');
            return;
        }

        // Make chat window draggable
        const chatWidget = document.getElementById('rag-chat-widget');
        const chatHeader = chatContainer.querySelector('.rag-chat-header');
        if (chatWidget && chatHeader) {
            makeDraggable(chatWidget, chatHeader);
        }

        // Click Event: Open Chat from Navigation Tab
        chatTriggerBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleChat();
        });

        // Click Event: Close Button
        chatCloseBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            closeChat();
        });

        // Click Event: Click outside container to close it (except on navigation button)
        document.addEventListener('click', (e) => {
            if (chatContainer.classList.contains('is-open')) {
                if (!chatContainer.contains(e.target) && e.target !== chatTriggerBtn) {
                    closeChat();
                }
            }
        });

        // Click Event: Send button
        sendBtn.addEventListener('click', (e) => {
            e.preventDefault();
            sendMessage();
        });

        // Keydown Event: Press Enter to send
        chatInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                sendMessage();
            }
        });

        // Initial connection status check
        checkBackendStatus();
    }

    // Toggle open state
    function toggleChat() {
        const isOpen = chatContainer.classList.toggle('is-open');
        if (isOpen) {
            chatInput.focus();
            checkBackendStatus();
        }
    }

    // Explicit close
    function closeChat() {
        chatContainer.classList.remove('is-open');
    }

    // Check Backend Connection Status
    async function checkBackendStatus() {
        if (!statusIndicator) return;

        setStatus('connecting', 'Connecting...');

        try {
            const response = await fetch(`${API_BASE_URL}/status`, {
                method: 'GET',
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                const data = await response.json();
                if (data.status === 'running') {
                    setStatus('online', `Online • ${data.document_count} docs`);
                } else {
                    setStatus('offline', 'System Offline');
                }
            } else {
                setStatus('offline', 'Offline');
            }
        } catch (error) {
            console.warn('RAG Backend is offline:', error);
            setStatus('offline', 'Offline');
        }
    }

    // Update Status Indicator CSS & Text
    function setStatus(state, text) {
        if (!statusIndicator) return;
        statusIndicator.className = `rag-status-indicator ${state}`;
        const textSpan = statusIndicator.querySelector('.status-text');
        if (textSpan) textSpan.textContent = text;
    }

    // Append Message Bubble to Log
    function appendMessage(role, htmlContent) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `rag-message ${role}`;

        const bubbleDiv = document.createElement('div');
        bubbleDiv.className = 'rag-message-bubble';
        bubbleDiv.innerHTML = htmlContent;
        messageDiv.appendChild(bubbleDiv);

        chatMessages.appendChild(messageDiv);
        scrollToBottom();
    }

    // Append Loading/Thinking Bouncing Dots Indicator
    function showThinkingIndicator() {
        const thinkingDiv = document.createElement('div');
        thinkingDiv.className = 'rag-message assistant thinking-container';
        thinkingDiv.id = 'rag-thinking-placeholder';

        const bubbleDiv = document.createElement('div');
        bubbleDiv.className = 'rag-message-bubble';
        bubbleDiv.innerHTML = `
            <div class="rag-thinking-indicator">
                <span class="rag-thinking-dot"></span>
                <span class="rag-thinking-dot"></span>
                <span class="rag-thinking-dot"></span>
            </div>
        `;
        
        thinkingDiv.appendChild(bubbleDiv);
        chatMessages.appendChild(thinkingDiv);
        scrollToBottom();
    }

    // Remove Bouncing Dots Indicator
    function removeThinkingIndicator() {
        const indicator = document.getElementById('rag-thinking-placeholder');
        if (indicator) {
            indicator.remove();
        }
    }

    // Scroll chat area to bottom
    function scrollToBottom() {
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Process & Send User Query
    async function sendMessage() {
        const queryText = chatInput.value.trim();
        if (!queryText) return;

        // Clear user input
        chatInput.value = '';

        // Add user message to UI
        appendMessage('user', formatMarkdown(queryText));

        // Add loading state
        showThinkingIndicator();
        setStatus('thinking', 'Thinking...');

        try {
            const response = await fetch(`${API_BASE_URL}/query`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    query: queryText,
                    session_id: currentSessionId
                })
            });

            removeThinkingIndicator();

            if (response.ok) {
                const data = await response.json();
                
                // Store session id to maintain conversational context
                if (data.session_id) {
                    currentSessionId = data.session_id;
                    sessionStorage.setItem('rag_session_id', currentSessionId);
                }

                // Render LLM response
                appendMessage('assistant', formatMarkdown(data.answer));
                setStatus('online', 'Online');
            } else {
                appendMessage('assistant', 'Sorry, I encountered an error communicating with the server. Please try again.');
                setStatus('online', 'Online');
            }
        } catch (error) {
            console.error('RAG Query Error:', error);
            removeThinkingIndicator();
            appendMessage('assistant', 'Sorry, I am unable to connect to the RAG Agent system. Please check if the local Python server is running.');
            setStatus('offline', 'Offline');
        }
    }

    // Safe Markdown Formatter (Bold, Italic, Code, Lists, Line Breaks)
    function formatMarkdown(text) {
        if (!text) return '';

        // Escape HTML tags to protect against XSS
        let html = text
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');

        // Bold: **text**
        html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

        // Italic: *text*
        html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');

        // Inline code: `code`
        html = html.replace(/`(.*?)`/g, '<code>$1</code>');

        // Simple Lists (lines beginning with "- " or "* ")
        const lines = html.split('\n');
        let inList = false;
        for (let i = 0; i < lines.length; i++) {
            const trimmed = lines[i].trim();
            if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
                const liText = trimmed.substring(2);
                if (!inList) {
                    lines[i] = `<ul style="margin-left: 16px; margin-top: 4px; margin-bottom: 4px; padding-left: 0; list-style-type: disc;"><li>${liText}</li>`;
                    inList = true;
                } else {
                    lines[i] = `<li>${liText}</li>`;
                }
            } else {
                if (inList) {
                    lines[i] = `</ul>${lines[i]}`;
                    inList = false;
                }
            }
        }
        if (inList) {
            lines.push('</ul>');
        }

        html = lines.join('\n');

        // Newlines to breaklines (outside lists)
        html = html.replace(/\n/g, '<br>');
        
        // Clean up empty lines from list conversions
        html = html.replace(/<\/ul><br>/g, '</ul>');
        html = html.replace(/<\/li><br>/g, '</li>');
        
        return html;
    }

    // Wire up after DOM load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
