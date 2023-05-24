import { Endpoint, Method, useFetch, useLazyFetch } from "hooks";

import { ExerciseData } from "shared-types";

export const useGetExercises = () => useFetch<ExerciseData[]>({
  endpoint: Endpoint.EXERCISE,
  method: Method.GET,
});

export const useGetExercisesLazy = () => useLazyFetch<ExerciseData[]>({
  endpoint: Endpoint.EXERCISE,
  method: Method.GET,
});