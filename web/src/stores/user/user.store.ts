import { atom } from "recoil";

import { UserData } from 'shared-types';

export interface UserStore extends Partial<Omit<UserData, 'customExercises'>> {}

export const userStore = atom<UserStore>({
  key: 'userStore',
  default: {},
});
