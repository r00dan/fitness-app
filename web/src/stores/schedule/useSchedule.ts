import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { ScheduleApi } from 'api';
import { scheduleStore } from './schedule.store';
import { useUser } from 'stores';

export function useSchedule() {
  const { user } = useUser();
  const [getSchedule, { data, loading: loadingSchedule }] = ScheduleApi.useGetScheduleLazy();
  const [schedules, setSchedules] = useRecoilState(scheduleStore);

  const loadSchedule = (userId: string) => getSchedule({ params: `/${userId}` });

  useEffect(() => {
    if (!loadingSchedule && data?.length) {
      setSchedules(data);
    }
  }, [user.id, loadingSchedule]);

  return {
    schedules,
    loadingSchedule,
    loadSchedule,
  };
}
