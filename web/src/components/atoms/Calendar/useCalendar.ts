import { useEffect, useState } from 'react';

import { useDateTimeHelper, IDay, IWeek } from 'hooks';

const headerMYDateFormat = "MMMM YYYY";
const headerDDateFormat = "ddd";

export function useCalendar() {
  const {
    now,
    setCurrentMonth,
    formateDateToObject,
  } = useDateTimeHelper();

  const [selectedDay, setSelectedDay] = useState<number>(now.date());
  const [arrayOfDays, setArrayOfDays] = useState<IWeek[]>([]);

  const handleNextMonthClick = () => {
    const plus = now.add(1, "month");
    setCurrentMonth(plus);
  };

  const handlePrevMonthClick = () => {
    const minus = now.subtract(1, "month");
    setCurrentMonth(minus);
  };

  const handleCellClick = (date: IDay) => {
    setSelectedDay(date.day);
  }

  const makeWeekdaysArray = () => {
    const result = [];

    for (let i = 0; i < 7; i++) {
      result.push(now.weekday(i).format(headerDDateFormat));
    }

    return result;
  }

  const getAllDays = () => {
    const nextMonth = now.add(1, "month").month();
    const allDates: IWeek[] = [];
    let currentDate = now.startOf("month").weekday(0);
    let weekDates = [];
    let weekCounter = 1;

    while (currentDate.weekday(0).toObject().months !== nextMonth) {
      const formated = formateDateToObject(currentDate);
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
  };

  useEffect(() => {
    getAllDays();
  }, [now]);

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
