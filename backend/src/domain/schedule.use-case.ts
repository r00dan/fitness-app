import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateScheduleDto } from 'src/application/dto';
import { Schedule, User } from 'src/infrastructure';
import { Repository } from 'typeorm';

@Injectable()
export class ScheduleUseCase {
  constructor(
    @InjectRepository(Schedule)
    private readonly scheduleRepository: Repository<Schedule>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  public async getAllSchedulesByUserId(userId: string) {
    return await this.scheduleRepository.find({
      where: { user: { id: userId } },
    });
  }

  public async createSchedule({ userId, ...dto }: CreateScheduleDto) {
    const currentDate = new Date();
    const user = await this.userRepository.findOne({ where: { id: userId } });

    const schedule = this.scheduleRepository.create({
      ...dto,
      user,
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
