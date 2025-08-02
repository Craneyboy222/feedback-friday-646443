import { useState, useEffect } from 'react';
import axios, { AxiosRequestConfig } from 'axios';

interface ApiState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export const useApi = <T>(url: string, config?: AxiosRequestConfig) => {
  const [state, setState] = useState<ApiState<T>>({
    data: null,
    loading: true,
    error: null
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<T>(url, config);
        setState({ data: response.data, loading: false, error: null });
      } catch (error) {
        setState({ data: null, loading: false, error: 'Failed to fetch data' });
      }
    };
    fetchData();
  }, [url, config]);

  return state;
};