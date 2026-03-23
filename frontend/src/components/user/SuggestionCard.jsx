const SuggestionCard = ({ suggestion }) => (
  <div className="card">
    <h4>{suggestion.productName}</h4>
    <p>Action: {suggestion.action}</p>
    <p>{suggestion.reason}</p>
  </div>
);

export default SuggestionCard;
