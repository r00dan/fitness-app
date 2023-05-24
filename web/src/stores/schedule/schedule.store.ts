import { atom } from 'recoil';

import { ScheduleDataType } from 'shared-types';

export const scheduleStore = atom<ScheduleDataType[]>({
  key: 'scheduleStore',
  default: [],
});
