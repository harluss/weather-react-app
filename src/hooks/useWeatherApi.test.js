import axios from 'axios';
import { renderHook } from '@testing-library/react-hooks';
import useWeatherApi from 'hooks/useWeatherApi';

jest.mock('axios');

describe('useWeatherApi hook', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('fetches data successfully for provided city', async () => {
    const city = 'dublin';
    const url = '/api/weather';
    const response = { data: 'dublin' };
    await axios.post.mockResolvedValue(response);
    const { result, waitForNextUpdate } = renderHook(() => useWeatherApi(city));

    expect(result.current.isLoading).toBe(true);
    expect(axios.post).toBeCalledTimes(1);
    expect(axios.post).toHaveBeenCalledWith(url, { city });
    await waitForNextUpdate();
    expect(result.current.isLoading).toBe(false);
    expect(result.current.forecast).toBe(city);
  });

  it('handles isLoading state correctly', async () => {
    const city = 'dublin';
    const { result, waitForNextUpdate } = renderHook(() => useWeatherApi(city));

    expect(result.current.isLoading).toBe(true);
    await waitForNextUpdate();
    expect(result.current.isLoading).toBe(false);
  });

  it('handles error state correctly', async () => {
    const city = 'dublin';
    const response = new Error('BAZINGA!');
    await axios.post.mockRejectedValue(response);
    const { result, waitForNextUpdate } = renderHook(() => useWeatherApi(city));

    expect(result.current.error).toBe(null);
    await waitForNextUpdate();
    expect(result.current.error).toBe(response);
    expect(result.current.forecast).toBe(null);
  });
});
