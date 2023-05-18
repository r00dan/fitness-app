import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AddWorkoutScheduleDto, CreateScheduleDto } from 'src/application/dto';

import { ScheduleUseCase } from 'src/domain';

@Controller('schedule')
export class ScheduleController {
  constructor(private readonly scheduleUseCase: ScheduleUseCase) {}

  @Get()
  public async get() {
    return await this.scheduleUseCase.getScheduleForOneDay();
  }

  @Post()
  public async create(@Body() dto: CreateScheduleDto) {
    return await this.scheduleUseCase.createSchedule(dto);
  }

  // @Post('/:id/workout')
  // public async addWorkout(
  //   @Param('id') id: string,
  //   @Body() addWorkoutScheduleDto: AddWorkoutScheduleDto,
  // ) {
  //   return this.scheduleUseCase.addWorkout({ id, ...dto });
  // }
}
