import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { SectionWrapper } from 'components/SectionWrapper';
import { theme } from 'styles/theme';

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
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
        <Description>{description}</Description>
        <Temp>{temp}℃</Temp>
        <Description>Feels like: {feels_like}℃</Description>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper second>
      {isLoading && <Message>Checking...</Message>}
      {error && <Message>{error}</Message>}
      {!isLoading && !error && <Message>{screenWidth > theme.sizes.tablet ? '👈' : '👆'} Provide location</Message>}
    </SectionWrapper>
  );
};

ForecastDisplay.propTypes = {
  error: PropTypes.string,
  forecast: PropTypes.object,
  isLoading: PropTypes.bool,
};

export default ForecastDisplay;
