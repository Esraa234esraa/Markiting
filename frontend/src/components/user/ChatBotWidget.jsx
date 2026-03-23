import { useState } from 'react';

const ChatBotWidget = ({ onAsk }) => {
  const [query, setQuery] = useState('What products should I restock this week?');

  return (
    <div className="card">
      <h3>AI Assistant</h3>
      <textarea value={query} onChange={(e) => setQuery(e.target.value)} />
      <button className="btn btn-primary" type="button" onClick={() => onAsk(query)}>
        Ask Chat Bot
      </button>
    </div>
  );
};

export default ChatBotWidget;
