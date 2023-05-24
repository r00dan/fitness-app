import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { ExerciseController, Exercise, ExerciseUseCase } from 'exercise';
import { ScheduleController, Schedule, ScheduleUseCase } from 'schedule';
import { UserController, User, UserUseCase } from 'user';
import { Workout, WorkoutController, WorkoutUseCase } from 'workout';

const entities = [User, Exercise, Schedule, Workout];

const controllers = [
  UserController,
  ExerciseController,
  ScheduleController,
  WorkoutController,
];

const useCases = [
  UserUseCase,
  ExerciseUseCase,
  ScheduleUseCase,
  WorkoutUseCase,
];

const providers = [...entities, ...useCases, ...controllers];

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: +process.env.POSTGRES_PORT,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      migrationsTableName: 'migration',
      migrations: ['src/migration/*.ts'],
      synchronize: true,
      entities,
    }),
    TypeOrmModule.forFeature(entities),
  ],
  providers,
  controllers,
})
export class AppModule {}
