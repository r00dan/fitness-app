import { Nullable } from 'commonTypes';

export class CreateExerciseDto {
  id!: string;
  title!: string;
  description?: Nullable<string>;
}
