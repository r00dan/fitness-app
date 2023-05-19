import { Body, Controller, Delete, Param, Post } from '@nestjs/common';

import { CreateCustomExerciseDto } from 'src/application/dto';
import { CustomExerciseUseCase } from 'src/domain';

@Controller('custom-exercise')
export class CustomExerciseController {
  constructor(private readonly customExerciseUseCase: CustomExerciseUseCase) {}

  @Post()
  public async create(@Body() dto: CreateCustomExerciseDto) {
    return this.customExerciseUseCase.addExercise(dto);
  }

  @Delete('/:id')
  public async delete(@Param('id') id: string) {
    return this.customExerciseUseCase.removeExercise(id);
  }
}
