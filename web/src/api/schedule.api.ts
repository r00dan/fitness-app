import { Endpoint, Method, useFetch, useLazyFetch } from "hooks";

import { ScheduleData } from "shared-types";

export const useGetSchedule = () => useFetch<ScheduleData[]>({
  endpoint: Endpoint.SCHEDULE,
  method: Method.GET,
});

export const useGetScheduleLazy = () => useLazyFetch<ScheduleData[]>({
  endpoint: Endpoint.SCHEDULE,
  method: Method.GET,
});