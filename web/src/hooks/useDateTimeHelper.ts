import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import locale from "dayjs/locale/en";
import weekdayPlugin from "dayjs/plugin/weekday";
import objectPlugin from "dayjs/plugin/toObject";
import isTodayPlugin from "dayjs/plugin/isToday";

export interface IDay {
  day: number;
  month: number;
  year: number;
  isCurrentMonth: boolean;
  isCurrentDay: boolean;
  _date: Dayjs; 
}

export interface IWeek {
  dates: IDay[];
}

export function useDateTimeHelper() {
  const now = dayjs().locale({
    ...locale,
  });
  dayjs.extend(weekdayPlugin);
  dayjs.extend(objectPlugin);
  dayjs.extend(isTodayPlugin);

  const [currentMonth, setCurrentMonth] = useState<Dayjs>(now);

  const formateDateToObject = (date: Dayjs): IDay => {
    const cloned = { ...date.toObject() };
    return {
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
