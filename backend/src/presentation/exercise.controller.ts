import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import {
  CreateExerciseDto,
  DeleteExerciseDto,
  GetExerciseDto,
  UpdateExerciseDto,
} from 'src/application/dto';
import { ExerciseUseCase } from 'src/domain';

@Controller('exercise')
export class ExerciseController {
  constructor(private readonly exerciseUseCase: ExerciseUseCase) {}

  @Get('/:id')
  public async get(@Param('id') dto: GetExerciseDto) {
    return await this.exerciseUseCase.getExercise(dto);
  }

  @Get()
  public async getAll() {
    return await this.exerciseUseCase.getExercises();
  }

  @Post()
  public async create(@Body() createExerciseDto: CreateExerciseDto) {
    return await this.exerciseUseCase.createExercise(createExerciseDto);
  }

  @Put()
  public async update(@Body() dto: UpdateExerciseDto) {
    return this.exerciseUseCase.updateExercise(dto);
  }

  @Delete()
  public async delete(@Body() dto: DeleteExerciseDto) {
    return this.exerciseUseCase.deleteExercise(dto);
  }
}
