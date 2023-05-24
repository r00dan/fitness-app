import { atom } from 'recoil';

import { ExerciseDataType } from 'shared-types';

export const exerciseStore = atom<ExerciseDataType[]>({
  key: 'exerciseStore',
  default: [],
});
