import { GlobalStyle } from 'styles/GlobalStyle';
import Form from 'components/Form';
import useWeatherApi from 'hooks/useWeatherApi';

function App() {
  const { error, forecast, isLoading } = useWeatherApi('sligo');
  return (
    <div className="App">
      <GlobalStyle />
      <p>weather</p>
      <Form />
      <p>{forecast}</p>
    </div>
  );
}

export default App;
