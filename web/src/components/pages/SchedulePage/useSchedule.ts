import { IDay, useDateTimeHelper } from "hooks";
import { useState } from "react";

export function useSchedule() {
  const { now, formateDateToObject, formateDate } = useDateTimeHelper();
  const [selectedDate, setSelectedDate] = useState<IDay>(formateDateToObject(now));
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const handleSelectWorkoutDay = (date: IDay) => {
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
