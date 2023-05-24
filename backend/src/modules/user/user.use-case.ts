import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User, CreateUserDto, UpdateUserDto } from 'user';

@Injectable()
export class UserUseCase {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  public async getUserInfo(id: string) {
    const user = await this.userRepository.findOne({
      where: { id },
      relations: ['exercises'],
    });

    return (
      user ??
      JSON.stringify({
        message: `Cannot find user.`,
      })
    );
  }

  public async createUserIfNotExist({ id, email, ...dto }: CreateUserDto) {
    const candidate = await this.userRepository
      .createQueryBuilder('user')
      .select()
      .where('id = :id', { id })
      .orWhere('email = :email', { email })
      .getOne();

    if (!candidate) {
      const currentDate = new Date();
      const user = this.userRepository.create({
        ...dto,
        id,
        email,
        createdAt: currentDate,
        updatedAt: currentDate,
        schedule: [],
        exercises: [],
      });

      await this.userRepository.save(user);
    } else {
      return JSON.stringify({
        message: `User with email ${email} has already registered.`,
      });
    }
  }

  public async updateUser(id: string, dto: UpdateUserDto) {
    const user = await this.userRepository.findOne({ where: { id } });

    if (!user) {
      return JSON.stringify({
        message: `Cannot find user.`,
      });
    }

    await this.userRepository.update({ id }, { ...dto });
  }
}
