import { useEffect, useState } from 'react';
import { chatbotApi } from '../../api/api';
import ChatBotLog from '../../components/admin/ChatBotLog';
import SuggestionList from '../../components/admin/SuggestionList';

const AdminChatMonitorPage = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    chatbotApi.logs().then((res) => setLogs(res.data));
  }, []);

  const latestSuggestions = logs[0]?.suggestions || [];

  return (
    <div className="page-card">
      <h2>AI Chat Bot Monitoring</h2>
      <div className="grid-2">
        <ChatBotLog logs={logs} />
        <SuggestionList suggestions={latestSuggestions} />
      </div>
    </div>
  );
};

export default AdminChatMonitorPage;
