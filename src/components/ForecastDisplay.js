import PropTypes from 'prop-types';

// const ForecastShape = {
//   city: PropTypes.string,
//   country: PropTypes.string,
// };

const ForecastDisplay = ({ error, forecast, isLoading }) => {
  return (
    <div>
      <p>forecast</p>
      {isLoading && <p>Loading...</p>}
      {forecast && <p>{forecast}</p>}
      {error && <p>{error.message}</p>}
    </div>
  );
};

ForecastDisplay.propTypes = {
  error: PropTypes.string,
  // forecast: PropTypes.shape(ForecastShape),
  forecast: PropTypes.string,
  isLoading: PropTypes.bool,
};

export default ForecastDisplay;
