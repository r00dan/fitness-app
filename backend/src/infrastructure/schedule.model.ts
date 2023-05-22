import { Exercise } from './exercise.model';
import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { User } from './user.model';

export interface WorkoutSet {
  repeats: number;
  weight: number;
}

export interface WorkoutExercise
  extends Omit<Exercise, 'createdAt' | 'updatedAt'> {
  requiredSets: WorkoutSet[];
  doneSets: WorkoutSet[];
}

@Entity('schedule')
export class Schedule {
  @PrimaryColumn()
  id!: string;

  @Column({ type: 'json' })
  workout: WorkoutExercise[];

  @Column()
  workoutDate!: string;

  @Column()
  createdAt!: Date;

  @Column()
  updatedAt!: Date;

  @ManyToOne(() => User, (user) => user.id)
  user: User;
}
