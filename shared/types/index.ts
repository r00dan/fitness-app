import { Exercise, CreateExerciseDto, GetExerciseDto, UpdateExerciseDto } from '../../backend/src/modules/exercise';
import { Schedule, CreateScheduleDto, GetScheduleDto } from '../../backend/src/modules/schedule';
import { User, CreateUserDto, UpdateUserDto } from '../../backend/src/modules/user';
import { Workout, WorkoutSet } from '../../backend/src/modules/workout';

export interface ExerciseDataType extends Exercise { };
export interface CreateExerciseInput extends CreateExerciseDto { };
export interface GetExerciseInput extends GetExerciseDto { };
export interface UpdateExerciseInput extends UpdateExerciseDto { };

export interface ScheduleDataType extends Schedule { };
export interface CreateScheduleInput extends CreateScheduleDto { };
export interface GetScheduleInput extends GetScheduleDto { };

export interface UserDataType extends User { };
export interface CreateUserInput extends CreateUserDto { };
export interface UpdateUserInput extends UpdateUserDto { };

export interface WorkoutDataType extends Workout { };
export interface WorkoutSetDataType extends WorkoutSet { };

export type { Nullable } from '../../backend/src/utils/common.types';
