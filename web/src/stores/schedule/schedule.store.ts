import { atom } from 'recoil';

import { ScheduleData } from 'shared-types';

export interface ScheduleStore extends ScheduleData {}

export const scheduleStore = atom<ScheduleStore[]>({
  key: 'scheduleStore',
  default: [],
});
