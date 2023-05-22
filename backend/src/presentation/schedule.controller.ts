import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateScheduleDto, GetScheduleDto } from 'src/application/dto';

import { ScheduleUseCase } from 'src/domain';

@Controller('schedule')
export class ScheduleController {
  constructor(private readonly scheduleUseCase: ScheduleUseCase) {}

  @Get('/:userId')
  public async get(@Param('userId') userId: string) {
    return this.scheduleUseCase.getAllSchedulesByUserId(userId);
  }

  @Post()
  public async create(@Body() dto: CreateScheduleDto) {
    return this.scheduleUseCase.createSchedule(dto);
  }

  // TODO: add DTO
  @Delete()
  public async delete(@Body() { scheduleId }: { scheduleId: string }) {
    return this.scheduleUseCase.removeSchedule(scheduleId);
  }
}
