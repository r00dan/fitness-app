import {
  Exercise,
  Schedule,
  User,
  WorkoutExercise,
  WorkoutSet,
  CustomExercise,
} from '../../backend/src/infrastructure';

import {
  GetExerciseDto,
  CreateExerciseDto,
  UpdateExerciseDto,
  DeleteExerciseDto,
  CreateScheduleDto,
  CreateUserDto,
  UpdateUserDto,
  CreateCustomExerciseDto,
} from '../../backend/src/application/dto';

export interface UserData extends User { };
export interface ExerciseData extends Exercise { };
export interface ScheduleData extends Schedule { };
export interface WorkoutExerciseData extends WorkoutExercise { };
export interface WorkoutSetData extends WorkoutSet { };
export interface CustomExerciseData extends CustomExercise { };

export interface GetExerciseDtoInput extends GetExerciseDto { };
export interface CreateExerciseDtoInput extends CreateExerciseDto { };
export interface UpdateExerciseDtoInput extends UpdateExerciseDto { };
export interface DeleteExerciseDtoInput extends DeleteExerciseDto { };

export interface CreateScheduleDtoInput extends CreateScheduleDto { };

export interface CreateUserDtoInput extends CreateUserDto { };
export interface UpdateUserDtoInput extends UpdateUserDto { };

export interface CreateCustomExerciseDtoInput extends CreateCustomExerciseDto { };
