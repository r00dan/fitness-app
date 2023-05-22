import { atom } from 'recoil';

import { ExerciseData } from 'shared-types';

export interface ExerciseStore extends ExerciseData {}

export const exerciseStore = atom<ExerciseStore[]>({
  key: 'exerciseStore',
  default: [],
});
