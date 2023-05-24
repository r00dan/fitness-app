import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';

import { Exercise } from 'exercise';
import { Schedule } from 'schedule';

export interface WorkoutSet {
  order: number;
  repeats: number;
  weight: number;
}

@Entity('workout')
export class Workout {
  @PrimaryColumn()
  id!: string;

  @Column({ type: 'json' })
  requiredSets!: WorkoutSet[];

  @Column({ type: 'json' })
  doneSets!: WorkoutSet[];

  @ManyToOne(() => Schedule, (schedule) => schedule.workout)
  schedule: Schedule;

  @ManyToMany(() => Exercise)
  @JoinTable()
  exercise: Exercise;
}
