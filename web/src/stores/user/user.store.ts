import { atom } from "recoil";

import { UserDataType, Nullable } from 'shared-types';

export const userStore = atom<Nullable<Partial<UserDataType>>>({
  key: 'userStore',
  default: null,
});
