const StockIndicator = ({ stock, minStockLevel }) => {
  const isLow = stock <= minStockLevel;
  return <span className={isLow ? 'badge-low' : 'badge-ok'}>{isLow ? 'Low' : 'Healthy'}</span>;
};

export default StockIndicator;
