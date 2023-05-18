import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateScheduleDto } from 'src/application/dto';
import { Schedule } from 'src/infrastructure';
import { Repository } from 'typeorm';

@Injectable()
export class ScheduleUseCase {
  constructor(
    @InjectRepository(Schedule)
    private readonly scheduleRepository: Repository<Schedule>,
  ) {}

  public async getScheduleForOneDay() {
    return this.scheduleRepository.find();
  }

  public async createSchedule(dto: CreateScheduleDto) {
    const alreadyExists = await this.scheduleRepository.findOne({
      where: { id: dto.id },
    });

    if (alreadyExists) {
      throw new Error(
        `You cannot create new schedule instance with same id: ${dto.id}.`,
      );
    }

    const currentTime = new Date();
    const newInstance = this.scheduleRepository.create({
      ...dto,
      createdAt: currentTime,
      updatedAt: currentTime,
    });

    await this.scheduleRepository.save(newInstance);
  }
}
