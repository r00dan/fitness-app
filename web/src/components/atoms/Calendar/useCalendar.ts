import { useCallback, useEffect, useState } from 'react';

import { useDateTimeHelper, Day, Week } from 'hooks';
import { useSchedule } from 'stores';

const headerMYDateFormat = "MMMM YYYY";
const headerDDateFormat = "ddd";

export function useCalendar() {
  const {
    now,
    setCurrentMonth,
    formateDateToObject,
  } = useDateTimeHelper();

  const { schedules } = useSchedule();

  const [selectedDay, setSelectedDay] = useState<number>(now.date());
  const [arrayOfDays, setArrayOfDays] = useState<Week[]>([]);

  const handleNextMonthClick = () => {
    const plus = now.add(1, "month");
    setCurrentMonth(plus);
  };

  const handlePrevMonthClick = () => {
    const minus = now.subtract(1, "month");
    setCurrentMonth(minus);
  };

  const handleCellClick = (date: Day) => {
    setSelectedDay(date.day);
  }

  const makeWeekdaysArray = () => {
    const result = [];

    for (let i = 0; i < 7; i++) {
      result.push(now.weekday(i).format(headerDDateFormat));
    }

    return result;
  }

  const getAllDays = useCallback(() => {
    const nextMonth = now.add(1, "month").month();
    const allDates: Week[] = [];
    let currentDate = now.startOf("month").weekday(0);
    let weekDates = [];
    let weekCounter = 1;

    while (currentDate.weekday(0).toObject().months !== nextMonth) {
      const workout = schedules.find(({ workoutDate }) =>
        currentDate.isSame(workoutDate, 'D') && currentDate.isSame(workoutDate, 'M'));
      const formated = formateDateToObject(currentDate, workout);
      weekDates.push(formated);

      if (weekCounter === 7) {
        allDates.push({ dates: weekDates });
        weekDates = [];
        weekCounter = 0;
      }
      weekCounter++;
      currentDate = currentDate.add(1, "day");
    }

    setArrayOfDays(allDates);
  }, [schedules]);

  useEffect(() => {
    getAllDays();
  }, [now, schedules]);

  return {
    selectedDay,
    headerMYDateFormat,
    headerDDateFormat,
    now,
    arrayOfDays,
    weekDays: makeWeekdaysArray(),
    handleNextMonthClick,
    handlePrevMonthClick,
    handleCellClick,
  };
}
