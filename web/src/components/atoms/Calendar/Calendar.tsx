import { useCalendar } from './useCalendar';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import classnames from 'classnames';

import style from './Calendar.module.scss';

import { Day } from 'hooks';

interface ICalendar {
  onDayClick(date: Day): void;
}

export function Calendar({ onDayClick }: ICalendar) {
  const {
    selectedDay,
    headerMYDateFormat,
    weekDays,
    now,
    arrayOfDays,
    handleNextMonthClick,
    handlePrevMonthClick,
    handleCellClick,
  } = useCalendar();

  const handleClick = (date: Day) => {
    if (date.isCurrentMonth) {
      handleCellClick(date);
      onDayClick(date);
    }
  }

  return (
    <div className={style.root}>
      <div className={style.header}>
        <div className={style.headerMY}>
          <div
            className={style.headerIcon}
            onClick={handlePrevMonthClick}
          >
              <FaChevronLeft />
          </div>
          <div className={style.headerCurrentMY}>
            <span>{now.format(headerMYDateFormat)}</span>
          </div>
          <div
            className={style.headerIcon}
            onClick={handleNextMonthClick}
          >
            <FaChevronRight />
          </div>
        </div>
        <div className={style.headerWeekDays}>
          {weekDays.map((day) => (
            <div
              key={day}
              className={style.headerWeekDayItem}
            >
              {day}
            </div>
          ))}
        </div>
      </div>
      <div className={style.body}>
        {arrayOfDays && arrayOfDays.map(({ dates }, index) => (
          <div
            className={style.bodyRow}
            key={index}
          >
            {dates && dates.map((date) => (
              <div
                key={`${date.day}-${date.month}`}
                className={classnames([
                  style.bodyCell,
                  !date.isCurrentMonth && style.notCurrentMonth,
                  date.isCurrentDay && style.currentDay,
                  (selectedDay === date.day) && date.isCurrentMonth && style.selected,
                  date.hasWorkout && date.isCurrentMonth && style.hasWorkout,
                ])}
                // TODO: remove arrow func
                onClick={() => handleClick(date)}
              >
                {date.day}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
