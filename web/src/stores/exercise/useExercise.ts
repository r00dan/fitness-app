import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { ExerciseApi } from 'api';
import { exerciseStore } from './exercise.store';

export function useExercise() {
  const [getExercises, { data, loading: loadingExercises }] = ExerciseApi.useGetExercisesLazy();
  const [exercises, setExercises] = useRecoilState(exerciseStore);

  const loadExercises = () => getExercises({});

  useEffect(() => {
    if (data?.length) {
      setExercises(data);
    }
  }, [loadingExercises]);

  return {
    exercises,
    loadingExercises,
    loadExercises,
  };
}
