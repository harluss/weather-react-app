import axios from 'axios';
import { renderHook, act } from '@testing-library/react-hooks';
import useWeatherApi from 'hooks/useWeatherApi';

jest.mock('axios');

describe('useWeatherApi hook', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  const location = { city: 'dublin', country: 'ireland' };

  it('fetches data successfully for provided city', async () => {
    const url = '/api/weather';
    const response = { data: 'dublin' };
    axios.post.mockResolvedValue(response);
    const { result, waitForNextUpdate } = renderHook(() => useWeatherApi());

    act(() => result.current.fetchForecast(location));

    expect(result.current.isLoading).toBe(true);
    expect(axios.post).toBeCalledTimes(1);
    expect(axios.post).toHaveBeenCalledWith(url, location);
    await act(() => waitForNextUpdate());

    expect(result.current.isLoading).toBe(false);
    expect(result.current.forecast).toBe(location.city);
  });

  it('handles isLoading state correctly', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useWeatherApi());

    act(() => result.current.fetchForecast(location.city));

    expect(result.current.isLoading).toBe(true);
    await waitForNextUpdate();
    expect(result.current.isLoading).toBe(false);
  });

  it('handles error state correctly', async () => {
    const errorResponse = new Error(`No data found for ${location.city}, ${location.country}`);
    axios.post.mockRejectedValue(errorResponse);
    const { result, waitForNextUpdate } = renderHook(() => useWeatherApi());

    act(() => result.current.fetchForecast(location));

    expect(result.current.error).toBe('');
    await waitForNextUpdate();
    expect(result.current.error).toBe(errorResponse.message);
    expect(result.current.forecast).toBe(undefined);
  });
});
