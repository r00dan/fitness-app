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
  ExerciseUseCase,
  CreateExerciseDto,
  GetExerciseDto,
  UpdateExerciseDto,
} from 'exercise';

@Controller('exercise')
export class ExerciseController {
  constructor(private readonly exerciseUseCase: ExerciseUseCase) {}

  @Get('/:id')
  public async get(@Param('id') dto: GetExerciseDto) {
    return await this.exerciseUseCase.getExercise(dto);
  }

  @Get()
  public async getDefault() {
    return await this.exerciseUseCase.getExercises();
  }

  @Get('/personal')
  public async getPersonal() {
    return await this.exerciseUseCase.getExercises();
  }

  @Post()
  public async create(@Body() dto: CreateExerciseDto) {
    return await this.exerciseUseCase.createExercise(dto);
  }

  @Put('/:id')
  public async update(@Param('id') id: string, @Body() dto: UpdateExerciseDto) {
    return this.exerciseUseCase.updateExercise(id, dto);
  }

  @Delete('/:id')
  public async delete(@Param('id') id: string) {
    return this.exerciseUseCase.deleteExercise(id);
  }

  @Post('/generate')
  public async generate() {
    return this.exerciseUseCase._addTestExercises();
  }
}
