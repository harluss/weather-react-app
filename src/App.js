import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'styles/GlobalStyle';
import Form from 'components/Form';
import ForecastDisplay from 'components/ForecastDisplay';
import useWeatherApi from 'hooks/useWeatherApi';
import { theme } from 'styles/theme';

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.yellow};
`;

const InnerWrapper = styled.div`
  width: 90%;
  max-width: 800px;
  height: 500px;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.2);

  @media (max-width: ${({ theme }) => theme.sizes.tablet}) {
    width: 90%;
    max-width: 400px;
    height: 700px;
    flex-direction: column;
  }
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.blue};
  font-size: 3rem;
  text-transform: capitalize;
`;

const Subtitle = styled.h2`
  color: ${({ theme }) => theme.colors.black};
  font-size: 1.5rem;
  text-transform: capitalize;
`;

function App() {
  const { error, fetchForecast, forecast, isLoading } = useWeatherApi();

  return (
    <ThemeProvider theme={theme}>
      <MainWrapper>
        <GlobalStyle />
        <Title>fierce mild!</Title>
        <Subtitle>some weather app</Subtitle>
        <InnerWrapper>
          <Form fetchForecast={fetchForecast} />
          <ForecastDisplay error={error} forecast={forecast} isLoading={isLoading} />
        </InnerWrapper>
      </MainWrapper>
    </ThemeProvider>
  );
}

export default App;
