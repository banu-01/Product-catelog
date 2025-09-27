import React, { useState } from 'react';
import useChatStore from '../store/chatStore';
import { sendMessage } from '../services/api.js';


export default function MessageInput({ convoId }) {
const [input, setInput] = useState('');
const { addMessage } = useChatStore();


async function handleSend(e) {
e.preventDefault();
if (!input.trim() || !convoId) return;


const msg = { id: Date.now(), text: input, role: 'user' };
addMessage(convoId, msg); // optimistic update
setInput('');


try {
await sendMessage(convoId, msg.text);
} catch (err) {
console.error('Send failed', err);
}
}


return (
<form onSubmit={handleSend} className="p-4 border-t flex">
<input
type="text"
className="flex-1 p-2 border rounded"
value={input}
onChange={(e) => setInput(e.target.value)}
placeholder={convoId ? 'Type a message...' : 'Select a conversation'}
/>
<button type="submit" className="ml-2 px-4 bg-blue-600 text-white rounded">
Send
</button>
</form>
);
}
