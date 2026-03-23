const SuggestionList = ({ suggestions = [] }) => (
  <div className="card">
    <h3>Latest Suggestions</h3>
    {suggestions.slice(0, 10).map((item) => (
      <div key={`${item.productName}-${item.action}`}>
        <strong>{item.productName}</strong> - {item.action} ({Math.round(item.confidence * 100)}%)
        <p>{item.reason}</p>
      </div>
    ))}
  </div>
);

export default SuggestionList;
