import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { CustomExercise } from './custom-exercise.model';

@Entity('user')
export class User {
  @PrimaryColumn()
  id!: string;

  @Column()
  email!: string;

  @Column({ nullable: true })
  localId!: string;

  @Column()
  displayName!: string;

  @Column({ nullable: true })
  lastLoginAt!: string;

  @Column({ nullable: true })
  lastRefreshAt!: string;

  @Column()
  preferedLanguage!: string;

  @Column()
  preferedUnit!: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt!: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt!: Date;

  @Column()
  archived!: boolean;

  @OneToMany(() => CustomExercise, (customExercise) => customExercise.user)
  customExercises: CustomExercise[];
}
