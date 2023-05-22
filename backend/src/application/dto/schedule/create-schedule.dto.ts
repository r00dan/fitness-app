import { WorkoutExercise } from 'src/infrastructure';

export class CreateScheduleDto {
  userId: string;
  id: string;
  workout: WorkoutExercise[];
  workoutDate: string;
}
