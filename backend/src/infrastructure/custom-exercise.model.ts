import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';

import { User } from './user.model';

@Entity('customExercise')
export class CustomExercise {
  @PrimaryColumn()
  exerciseId!: string;

  @Column()
  title!: string;

  @Column({ nullable: true })
  description?: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt!: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt!: Date;

  @ManyToOne(() => User, (user) => user.customExercises)
  user: User;
}
