import { useEffect, useReducer, useRef } from 'react';

interface State<T> {
  data?: T;
  error?: Error;
  loading?: boolean;
}

type Cache<T> = { [url: string]: T };

type Action<T> =
  | { type: 'loading' }
  | { type: 'fetched'; payload: T }
  | { type: 'error'; payload: Error };

export enum Endpoint {
  USER = '/user',
  HISTORY = '/history',
  EXERCISE = '/exercise',
  SCHEDULE = '/schedule',
}

export enum Method {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

const API = 'http://localhost:7007';
const headers = {
  "Content-Type": "application/json",
};

export function useFetch<T = unknown, K = unknown>(endpoint: Endpoint, method: Method, body?: K): State<T> {
  const url = `${API}${endpoint}`;
  const cache = useRef<Cache<T>>({});
  const cancelRequest = useRef<boolean>(false);
  const initialState: State<T> = {
    error: undefined,
    data: undefined,
  };

  const fetchReducer = (state: State<T>, action: Action<T>): State<T> => {
    switch (action.type) {
      case 'loading':
        return { ...initialState, loading: true };
      case 'fetched':
        return { ...initialState, data: action.payload, loading: false };
      case 'error':
        return { ...initialState, error: action.payload, loading: false };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(fetchReducer, initialState)

  useEffect(() => {
    if (!url) return

    cancelRequest.current = false

    const fetchData = async () => {
      dispatch({ type: 'loading' });

      if (cache.current[url]) {
        dispatch({ type: 'fetched', payload: cache.current[url] });
        return;
      }

      try {
        const response = await fetch(url, {
          headers,
          method,
          body: JSON.stringify(body),
        });
        if (!response.ok) {
          throw new Error(response.statusText)
        }

        const data = (await response.json()) as T;
        cache.current[url] = data;

        if (!cancelRequest.current) {
          dispatch({ type: 'fetched', payload: data });
        }
      } catch (error) {
        if (!cancelRequest.current) {
          dispatch({ type: 'error', payload: error as Error })
        }
      }
    }

    fetchData();

    return () => {
      cancelRequest.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url])

  return state;
}
