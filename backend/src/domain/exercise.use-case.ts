import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  CreateExerciseDto,
  GetExerciseDto,
  DeleteExerciseDto,
  UpdateExerciseDto,
} from 'src/application/dto';

import { Exercise } from 'src/infrastructure/exercise.model';
import { Repository } from 'typeorm';

@Injectable()
export class ExerciseUseCase {
  constructor(
    @InjectRepository(Exercise)
    private readonly exerciseRepository: Repository<Exercise>,
  ) {}

  public async getExercise({ id }: GetExerciseDto) {
    return await this.exerciseRepository.findOne({ where: { id } });
  }

  public async getExercises() {
    return (await this.exerciseRepository.find()) || [];
  }

  public async createExercise(dto: CreateExerciseDto) {
    const alreadyExists = await this.exerciseRepository.findOne({
      where: { id: dto.id },
    });

    if (alreadyExists) {
      throw new Error(`Exercise with id: ${dto.id} has already added.`);
    }

    const currentTime = new Date();
    const newInstance = this.exerciseRepository.create({
      ...dto,
      createdAt: currentTime,
      updatedAt: currentTime,
    });

    await this.exerciseRepository.save(newInstance);
  }

  public async updateExercise({ id, ...dto }: UpdateExerciseDto) {
    await this.exerciseRepository
      .createQueryBuilder()
      .update(Exercise)
      .set({ ...dto, updatedAt: new Date() })
      .where('id = :id', { id })
      .execute();
  }

  public async deleteExercise({ id }: DeleteExerciseDto) {
    const exercise = await this.exerciseRepository.findOne({
      where: { id },
    });

    await this.exerciseRepository.remove(exercise);
  }
}
