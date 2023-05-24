import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { ScheduleUseCase, CreateScheduleDto, GetScheduleDto } from 'schedule';

@Controller('schedule')
export class ScheduleController {
  constructor(private readonly scheduleUseCase: ScheduleUseCase) {}

  @Get()
  public async get(@Body() dto: GetScheduleDto) {
    return this.scheduleUseCase.getAllSchedulesByUserId(dto);
  }

  @Post()
  public async create(@Body() dto: CreateScheduleDto) {
    return this.scheduleUseCase.createSchedule(dto);
  }

  @Put('/:id')
  public async update(@Param('id') id: string) {
    return id;
  }

  @Delete('/:id')
  public async delete(@Param('id') id: string) {
    return this.scheduleUseCase.removeSchedule(id);
  }
}
