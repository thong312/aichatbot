import React, { useState, useRef, useEffect } from 'react';
import FileUploader from '../components/uploadfile';

const API_URL = import.meta.env.VITE_DEV_API_URL + '/v1/ask';

export default function Chat() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const messagesEndRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const sendMessage = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        setMessages((msgs) => [...msgs, { role: 'user', content: input }]);
        setLoading(true);

        try {
            const res = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ question: input }),
            });

            const data = await res.json();

            // Remove <think>...</think> reasoning if present
            const cleanAnswer = data.answer.replace(/<think>[\s\S]*?<\/think>/, '').trim();

            // Extract all sources (if any)
            const sourcesList = (data.sources || [])
                .map(s => s.text?.metadata?.source)
                .filter(Boolean); // remove undefined/null

            setMessages((msgs) => [
                ...msgs,
                {
                    role: 'bot',
                    content: cleanAnswer,
                    source: sourcesList.join(', ') // join multiple sources into a string
                }
            ]);
        } catch {
            setMessages((msgs) => [
                ...msgs,
                { role: 'bot', content: 'Error: Unable to get response.', source: '' }
            ]);
        }


        setInput('');
        setLoading(false);
    };

    return (
        <div className="h-[calc(100vh-2rem)] bg-clip-border rounded-xl w-full flex flex-col bg-gray-50">
            {/* Chat container */}
            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-4">
                {messages.map((msg, i) => (
                    <div
                        key={i}
                        className={`max-w-[80%] rounded-lg px-4 py-3 shadow text-white
              ${msg.role === 'user'
                                ? 'self-end bg-black text-right'
                                : 'self-start bg-black/80'
                            }`}
                    >
                        <div>{msg.content}</div>
                        {msg.role === 'bot' && msg.source && (
                            <div className="text-xs text-gray-500 mt-2">
                                <b>Source:</b> {msg.source}
                            </div>
                        )}
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form
                onSubmit={sendMessage}
                className="flex border-t border-gray-200 p-4 bg-white"
            >
                <FileUploader onUploaded={(fileData) => {
                    console.log("file uploaded", fileData)
                }} />
                <input
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder="Type your question..."
                    className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:border-blue-400 text-base text-black"
                    disabled={loading}
                />
                <button
                    type="submit"
                    disabled={loading || !input.trim()}
                    className="ml-3 px-6 py-2 rounded-lg bg-blue-600 text-white font-semibold text-base hover:bg-blue-700 disabled:bg-gray-300"
                >
                    {loading ? '...' : 'Send'}
                </button>

            </form>
        </div>

    );
}
