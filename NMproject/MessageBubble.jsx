import React from 'react';


export default function MessageBubble({ message }) {
const isUser = message.role === 'user';
return (
<div className={`mb-2 flex ${isUser ? 'justify-end' : 'justify-start'}`}>
<div className={`p-2 rounded-lg ${isUser ? 'bg-blue-600 text-white' : 'bg-white'}`}>
{message.text}
</div>
</div>
);
}
