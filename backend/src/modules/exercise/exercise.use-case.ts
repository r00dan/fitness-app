import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import {
  Exercise,
  CreateExerciseDto,
  GetExerciseDto,
  UpdateExerciseDto,
} from 'exercise';
import { generateDefaultExercises } from 'src/generators';

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
    return await this.exerciseRepository.findAndCount();
  }

  public async getPersonalExercises() {
    return await this.exerciseRepository.findAndCount({
      where: { user: true },
    });
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

  public async updateExercise(id: string, dto: UpdateExerciseDto) {
    await this.exerciseRepository
      .createQueryBuilder()
      .update(Exercise)
      .set({ ...dto, updatedAt: new Date() })
      .where('id = :id', { id })
      .execute();
  }

  public async deleteExercise(id: string) {
    const exercise = await this.exerciseRepository.findOne({
      where: { id },
    });

    await this.exerciseRepository.remove(exercise);
  }

  public async _addTestExercises() {
    console.log(generateDefaultExercises(20));
    const exercises = this.exerciseRepository.create(
      generateDefaultExercises(20),
    );
    await this.exerciseRepository.save(exercises);
    return exercises;
  }
}
