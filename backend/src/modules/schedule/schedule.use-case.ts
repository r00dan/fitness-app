import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Schedule, CreateScheduleDto, GetScheduleDto } from 'schedule';

@Injectable()
export class ScheduleUseCase {
  constructor(
    @InjectRepository(Schedule)
    private readonly scheduleRepository: Repository<Schedule>,
  ) {}

  public async getAllSchedulesByUserId({ userId }: GetScheduleDto) {
    return await this.scheduleRepository.find({
      relations: { user: true },
      where: { user: { id: userId } },
    });
  }

  public async createSchedule({ userId, ...dto }: CreateScheduleDto) {
    const currentDate = new Date();

    const schedule = this.scheduleRepository.create({
      ...dto,
      userId,
      createdAt: currentDate,
      updatedAt: currentDate,
    });

    await this.scheduleRepository.save(schedule);
  }

  public async removeSchedule(scheduleId: string) {
    const schedule = await this.scheduleRepository.findOne({
      where: { id: scheduleId },
    });

    if (schedule) {
      await this.scheduleRepository.remove(schedule);
    }
  }
}
