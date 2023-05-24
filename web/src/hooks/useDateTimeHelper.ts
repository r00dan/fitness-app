import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import locale from "dayjs/locale/en";
import weekdayPlugin from "dayjs/plugin/weekday";
import objectPlugin from "dayjs/plugin/toObject";
import isTodayPlugin from "dayjs/plugin/isToday";

import { ScheduleStore } from "stores/schedule/schedule.store";

export interface Day {
  day: number;
  month: number;
  year: number;
  isCurrentMonth: boolean;
  isCurrentDay: boolean;
  workout?: ScheduleStore;
  hasWorkout?: boolean;
  _date: Dayjs;
}

export interface Week {
  dates: Day[];
}

export function useDateTimeHelper() {
  const now = dayjs().locale({
    ...locale,
  });
  dayjs.extend(weekdayPlugin);
  dayjs.extend(objectPlugin);
  dayjs.extend(isTodayPlugin);

  const [currentMonth, setCurrentMonth] = useState<Dayjs>(now);

  const formateDateToObject = (date: Dayjs, workout?: ScheduleStore): Day => {
    const cloned = { ...date.toObject() };
    return {
      workout,
      hasWorkout: !!workout,
      day: cloned.date,
      month: cloned.months,
      year: cloned.years,
      isCurrentMonth: cloned.months === currentMonth.month(),
      isCurrentDay: date.isToday(),
      _date: date,
    };
  };

  const formateDate = (date: Dayjs | string, template: string) => dayjs(date).format(template); 

  return {
    now: currentMonth,
    nowMMMDD: currentMonth.format('MMM DD'),
    setCurrentMonth,
    formateDate,
    formateDateToObject,
  };
}
