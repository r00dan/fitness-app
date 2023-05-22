import { Calendar, Drawer, Layout } from 'atoms';
import { EditWorkoutForm } from 'molecules';
import { useSchedule } from './useSchedulePage';

import style from './SchedulePage.module.scss';

export function SchedulePage(): JSX.Element {
  const {
    isOpened,
    formattedDate,
    selectedDate,
    handleSelectWorkoutDay,
    handleCloseDrawer,
  } = useSchedule();
  return (
    <Layout>
      <div className={style.root}>
        <Calendar
          onDayClick={handleSelectWorkoutDay}
        />
        <Drawer
          title={`Workout program for ${formattedDate}`}
          isOpen={isOpened}
          onClose={handleCloseDrawer}
        >
          <div className={style.workoutTitle}>
            <EditWorkoutForm
              scheduleDay={selectedDate.workout}
            />
          </div>
        </Drawer>
      </div>
    </Layout>
  );
}
