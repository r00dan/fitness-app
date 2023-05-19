import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CustomExercise, User } from 'src/infrastructure';
import { CreateCustomExerciseDto } from 'src/application/dto';

@Injectable()
export class CustomExerciseUseCase {
  constructor(
    @InjectRepository(CustomExercise)
    private readonly customExerciseRepository: Repository<CustomExercise>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  public async addExercise({ userId, ...dto }: CreateCustomExerciseDto) {
    const currentDate = new Date();
    const user = await this.userRepository.findOne({ where: { id: userId } });
    const exercise = this.customExerciseRepository.create({
      ...dto,
      user,
      createdAt: currentDate,
      updatedAt: currentDate,
    });

    return await this.customExerciseRepository.save(exercise);
  }

  public async removeExercise(exerciseId: string) {
    const exercise = await this.customExerciseRepository.findOne({
      where: { exerciseId },
    });

    if (!exercise) {
      throw new BadRequestException(
        `Cannot find exercise with id: ${exerciseId}.`,
      );
    }

    await this.customExerciseRepository.remove(exercise);
  }
}
