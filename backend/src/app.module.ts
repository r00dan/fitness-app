import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { ExerciseController, ScheduleController } from './presentation';
import { ExerciseUseCase, ScheduleUseCase } from './domain';
import { Exercise, Schedule } from './infrastructure';

const entities = [Exercise, Schedule];
const controllers = [ExerciseController, ScheduleController];
const useCases = [ExerciseUseCase, ScheduleUseCase];
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
