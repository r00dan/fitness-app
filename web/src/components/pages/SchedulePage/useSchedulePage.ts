import { useState } from "react";

import { Day, useDateTimeHelper } from "hooks";

export function useSchedule() {
  const { now, formateDateToObject, formateDate } = useDateTimeHelper();
  const [selectedDate, setSelectedDate] = useState<Day>(formateDateToObject(now));
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const handleSelectWorkoutDay = (date: Day) => {
    setSelectedDate(date);
    setIsOpened(true);
  };

  const handleCloseDrawer = () => setIsOpened(false);

  return {
    isOpened,
    formattedDate: formateDate(selectedDate._date, 'MMM DD'),
    selectedDate,
    handleSelectWorkoutDay,
    handleCloseDrawer,
  };
}
