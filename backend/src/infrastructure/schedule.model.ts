import { Exercise } from './exercise.model';
import { Column, Entity, PrimaryColumn } from 'typeorm';

export interface WorkoutSet {
  repeats: number;
  weight: number;
}

export interface WorkoutExercise
  extends Omit<Exercise, 'createdAt' | 'updatedAt'> {
  requiredSets: WorkoutSet[];
  doneSets?: WorkoutSet[];
}

@Entity('schedule')
export class Schedule {
  @PrimaryColumn()
  id!: string;

  @Column({ type: 'json' })
  workout: WorkoutExercise[];

  @Column()
  createdAt!: Date;

  @Column()
  updatedAt!: Date;
}
