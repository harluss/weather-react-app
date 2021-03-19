import { useState } from 'react';
import axios from 'axios';

const useWeatherApi = () => {
  const [forecast, setForecast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchForecast = async (city) => {
    setIsLoading(true);

    try {
      const { data } = await axios.post('/api/weather', { city });
      setForecast(data);
    } catch (error) {
      setError(error?.message);
    }

    setIsLoading(false);
  };

  return { error, fetchForecast, forecast, isLoading };
};

export default useWeatherApi;
