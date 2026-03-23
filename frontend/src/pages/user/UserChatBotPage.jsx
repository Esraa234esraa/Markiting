import { useState } from 'react';
import { chatbotApi } from '../../api/api';
import ChatBotWidget from '../../components/user/ChatBotWidget';
import SuggestionCard from '../../components/user/SuggestionCard';

const UserChatBotPage = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [message, setMessage] = useState('Ask for restock and promotion insights.');

  const handleAsk = async (query) => {
    const { data } = await chatbotApi.ask({ query });
    setMessage(data.response);
    setSuggestions(data.suggestions || []);
  };

  return (
    <div className="page-card">
      <h2>AI Chat Bot</h2>
      <p>{message}</p>
      <ChatBotWidget onAsk={handleAsk} />
      <div className="grid-2" style={{ marginTop: 12 }}>
        {suggestions.map((suggestion) => (
          <SuggestionCard key={`${suggestion.productId}-${suggestion.action}`} suggestion={suggestion} />
        ))}
      </div>
    </div>
  );
};

export default UserChatBotPage;
