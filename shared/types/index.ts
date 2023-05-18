import {
  Exercise,
  History,
  Schedule,
  User,
  WorkoutExercise,
  WorkoutSet,
} from '../../backend/src/infrastructure';

import {
  GetExerciseDto,
  CreateExerciseDto,
  UpdateExerciseDto,
  DeleteExerciseDto,
  CreateScheduleDto,
} from '../../backend/src/application/dto';

export interface UserData extends User { };
export interface ExerciseData extends Exercise { };
export interface HistoryData extends History { };
export interface ScheduleData extends Schedule { };
export interface WorkoutExerciseData extends WorkoutExercise { };
export interface WorkoutSetData extends WorkoutSet { };

export interface GetExerciseDtoInput extends GetExerciseDto { };
export interface CreateExerciseDtoInput extends CreateExerciseDto { };
export interface UpdateExerciseDtoInput extends UpdateExerciseDto { };
export interface DeleteExerciseDtoInput extends DeleteExerciseDto { };
export interface CreateScheduleDtoInput extends CreateScheduleDto { };
