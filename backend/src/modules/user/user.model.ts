import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

import { Exercise } from 'exercise';
import { Schedule } from 'schedule';

@Entity('user')
export class User {
  @PrimaryColumn()
  id!: string;

  @Column()
  email!: string;

  @Column()
  displayName!: string;

  @Column()
  preferedLanguage!: string;

  @Column()
  preferedUnit!: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt!: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt!: Date;

  @OneToMany(() => Schedule, (schedule) => schedule.user)
  schedule!: Schedule[];

  @OneToMany(() => Exercise, (exercise) => exercise.user)
  exercises!: Exercise[];
}
