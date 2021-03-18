import { useEffect, useState } from 'react';
import axios from 'axios';

const useWeatherApi = (city) => {
  const [forecast, setForecast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const { data } = await axios.post('/api/weather', { city });
      setForecast(data);
    } catch (error) {
      setError(error);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [city]);

  return { error, forecast, isLoading };
};

export default useWeatherApi;
