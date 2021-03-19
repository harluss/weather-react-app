import { useState } from 'react';
import axios from 'axios';

const useWeatherApi = () => {
  const [forecast, setForecast] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchForecast = async ({ city, country }) => {
    setIsLoading(true);

    try {
      const { data } = await axios.post('/api/weather', { city, country });
      setForecast(data);
    } catch (error) {
      console.log(error);
      setError(`No weather data for ${city} (${country}) found`);
    }

    setIsLoading(false);
  };

  return { error, fetchForecast, forecast, isLoading };
};

export default useWeatherApi;
