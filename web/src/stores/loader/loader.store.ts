import { atom } from "recoil";

export const loaderStore = atom<boolean>({
  key: 'loaderStatus',
  default: false,
});
