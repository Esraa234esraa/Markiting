const ChatBotLog = ({ logs = [] }) => (
  <div className="card">
    <h3>AI Chat Bot Interactions</h3>
    {logs.length === 0 && <p>No chat logs yet.</p>}
    {logs.map((log) => (
      <div key={log._id} style={{ borderBottom: '1px solid #d0d5dd', marginBottom: 12 }}>
        <p>
          <strong>{log.user?.name}</strong> asked: {log.question}
        </p>
        <p>Suggestions: {log.suggestions?.length || 0}</p>
      </div>
    ))}
  </div>
);

export default ChatBotLog;
