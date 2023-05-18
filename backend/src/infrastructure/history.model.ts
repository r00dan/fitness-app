import { Exercise } from './exercise.model';
import { Column, Entity, JoinTable, ManyToMany, PrimaryColumn } from 'typeorm';
import { User } from './user.model';

@Entity('history')
export class History {
  @PrimaryColumn()
  id!: string;

  @Column()
  weight!: number;

  @Column()
  repeats!: number;

  @Column()
  createdAt!: Date;

  @Column()
  updatedAt!: Date;

  @ManyToMany(() => User)
  @JoinTable()
  user!: User;

  @ManyToMany(() => Exercise)
  @JoinTable()
  exercise!: Exercise;
}
