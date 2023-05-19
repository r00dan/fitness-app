import { useEffect, useReducer, useRef } from 'react';

import { Endpoint, Method, useLoader } from 'hooks';

interface FetchOptions {
  endpoint: Endpoint,
  method: Method,
  withLoader?: boolean,
}

interface FetchInput<K> {
  params?: string;
  body?: K;
}

interface State<T> {
  data?: T;
  error?: Error;
  loading: boolean;
}

type Cache<T> = { [url: string]: T };

type Action<T> =
  | { type: 'loading' }
  | { type: 'fetched'; payload: T }
  | { type: 'error'; payload: Error };

const API = 'http://localhost:7007';
const headers = {
  "Content-Type": "application/json",
};

export function useLazyFetch<T = unknown>({
  endpoint,
  method,
  withLoader,
}: FetchOptions): [<K = unknown>(input: FetchInput<K>) => void, State<T>] {
  const url = `${API}${endpoint}`;
  const cache = useRef<Cache<T>>({});
  const cancelRequest = useRef<boolean>(false);
  const { UNSAFE_forceLoaderStatus } = useLoader();
  const initialState: State<T> = {
    error: undefined,
    data: undefined,
    loading: false,
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

  const fetchData = async <K = unknown>({ body, params }: FetchInput<K>) => {
    dispatch({ type: 'loading' });

    if (cache.current[url]) {
      dispatch({ type: 'fetched', payload: cache.current[url] });
      return;
    }

    try {
      const response = await fetch(`${url}${params ?? ''}`, {
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

  useEffect(() => {
    const { loading } = state;

    if (withLoader) {
      UNSAFE_forceLoaderStatus(!!loading);
    }
  }, [state.loading]);

  return [fetchData, state];
}
