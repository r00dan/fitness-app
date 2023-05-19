import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import {
  ExerciseController,
  ScheduleController,
  UserController,
  CustomExerciseController,
} from 'src/presentation';
import {
  ExerciseUseCase,
  ScheduleUseCase,
  UserUseCase,
  CustomExerciseUseCase,
} from 'src/domain';
import { Exercise, Schedule, User, CustomExercise } from 'src/infrastructure';

const entities = [Exercise, Schedule, User, CustomExercise];
const controllers = [
  ExerciseController,
  ScheduleController,
  UserController,
  CustomExerciseController,
];
const useCases = [
  ExerciseUseCase,
  ScheduleUseCase,
  UserUseCase,
  CustomExerciseUseCase,
];
const providers = [...useCases, ...entities, ...controllers];

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: +process.env.POSTGRES_PORT ?? 5432,
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
