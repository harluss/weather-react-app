import PropTypes from 'prop-types';
import styled from 'styled-components';
import { SectionWrapper } from 'components/SectionWrapper';

const Temp = styled.p`
  color: ${({ theme }) => theme.colors.yellow};
  font-size: 6em;
`;
const Description = styled.p`
  color: ${({ theme }) => theme.colors.white};
  text-transform: capitalize;
  font-size: 1.5rem;
  margin-top: 0.2rem;
`;

const Message = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.5rem;
  text-align: center;
`;

const ForecastDisplay = ({ error, forecast, isLoading }) => {
  if (forecast) {
    const {
      weather: [{ description }],
      main: { temp, feels_like },
      sys: { country },
      name,
    } = forecast;

    return (
      <SectionWrapper second>
        <Description>
          {name}, {country}
        </Description>
        <Temp>{temp}℃</Temp>
        <Description>Feels like: {feels_like}℃</Description>
        <Description>{description}</Description>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper second>
      {isLoading && <Message>Checking...</Message>}
      {error && <Message>{error}</Message>}
      {!isLoading && !error && <Message>👈 Provide location</Message>}
    </SectionWrapper>
  );
};

ForecastDisplay.propTypes = {
  error: PropTypes.string,
  forecast: PropTypes.object,
  isLoading: PropTypes.bool,
};

export default ForecastDisplay;
