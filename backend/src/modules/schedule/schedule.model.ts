import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';

import { User } from 'user';
import { Workout } from 'workout';

@Entity('schedule')
export class Schedule {
  @PrimaryColumn()
  id!: string;

  @Column()
  workoutDate!: string;

  @Column()
  createdAt!: Date;

  @Column()
  updatedAt!: Date;

  @Column()
  userId!: string;

  @ManyToOne(() => User, (user) => user.schedule)
  user!: User;

  @OneToMany(() => Workout, (workout) => workout.schedule)
  workout!: Workout[];
}
