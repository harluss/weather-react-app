import { GlobalStyle } from 'styles/GlobalStyle';
import Form from 'components/Form';
import ForecastDisplay from 'components/ForecastDisplay';
import useWeatherApi from 'hooks/useWeatherApi';

function App() {
  const { error, fetchForecast, forecast, isLoading } = useWeatherApi();

  return (
    <>
      <div className="App">
        <GlobalStyle />
        <p>weather</p>
        <Form fetchForecast={fetchForecast} />
      </div>
      <dir>
        <ForecastDisplay error={error} forecast={forecast} isLoading={isLoading} />
      </dir>
    </>
  );
}

export default App;
