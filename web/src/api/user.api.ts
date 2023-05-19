import { Endpoint, Method, useFetch, useLazyFetch } from "hooks";

import { UserData } from "shared-types";

export const useGetUser = (userId: string) => useFetch<UserData>({
  endpoint: Endpoint.USER,
  method: Method.GET,
  params: `/${userId}`,
});

export const useGetUserLazy = () => useLazyFetch<UserData>({
  endpoint: Endpoint.USER,
  method: Method.GET,
});

export const useCreateUser = () => useFetch({
  endpoint: Endpoint.USER,
  method: Method.POST,
});

export const useCreateUserLazy = () => useLazyFetch({
  endpoint: Endpoint.USER,
  method: Method.POST,
});

export const useUpdateUser = () => useFetch({
  endpoint: Endpoint.USER,
  method: Method.PUT,
});

export const useUpdateUserLazy = () => useLazyFetch({
  endpoint: Endpoint.USER,
  method: Method.PUT,
});

export const useRemoveUser = (userId: string) => useFetch({
  endpoint: Endpoint.USER,
  method: Method.PUT,
  params: `/${userId}/remove`,
});

export const useRemoveUserLazy = () => useLazyFetch({
  endpoint: Endpoint.USER,
  method: Method.PUT,
});

export const useRecoverUser = (userId: string) => useFetch({
  endpoint: Endpoint.USER,
  method: Method.PUT,
  params: `/${userId}/recover`,
});

export const useRecoverUserLazy = () => useLazyFetch({
  endpoint: Endpoint.USER,
  method: Method.PUT,
});