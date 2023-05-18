import { Calendar, Drawer, Layout } from 'atoms';
import { AddWorkoutForm } from 'molecules';
import { useSchedule } from './useSchedule';

import style from './SchedulePage.module.scss';

export function SchedulePage(): JSX.Element {
  const {
    isOpened,
    formattedDate,
    handleSelectWorkoutDay,
    handleCloseDrawer,
  } = useSchedule();
  return (
    <Layout>
      <div className={style.root}>
        <Calendar
          onDayClick={handleSelectWorkoutDay}
        />
        <div
          className={style.grid}
        >
          <div>
            History
          </div>
        </div>
        <Drawer
          title={`Workout program for ${formattedDate}`}
          isOpen={isOpened}
          onClose={handleCloseDrawer}
        >
          <div className={style.workoutTitle}>
            <AddWorkoutForm />
          </div>
        </Drawer>
      </div>
    </Layout>
  );
}
