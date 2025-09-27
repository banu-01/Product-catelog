{messages.map((m) => (
<MessageBubble key={m.id} message={m} />
))}
<div ref={endRef} />
</div>
);
}
