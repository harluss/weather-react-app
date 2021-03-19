import PropTypes from 'prop-types';

const ForecastDisplay = ({ error, forecast, isLoading }) => {
  return (
    <div>
      <p>forecast</p>
      {isLoading && <p>Loading...</p>}
      {forecast && <p>{JSON.stringify(forecast, null, 2)}</p>}
      {error && <p>{error}</p>}
    </div>
  );
};

ForecastDisplay.propTypes = {
  error: PropTypes.string,
  forecast: PropTypes.object,
  isLoading: PropTypes.bool,
};

export default ForecastDisplay;
