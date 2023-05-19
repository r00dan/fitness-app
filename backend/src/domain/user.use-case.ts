import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateUserDto, UpdateUserDto } from 'src/application/dto';
import { User } from 'src/infrastructure';

@Injectable()
export class UserUseCase {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  public async getUserInfo(id: string) {
    const user = await this.userRepository.findOne({
      where: { id },
      relations: ['customExercises'],
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
      .leftJoinAndSelect('user.customExercises', 'customExercises')
      .getOne();

    console.log(candidate);

    if (!candidate) {
      const currentDate = new Date();
      const user = this.userRepository.create({
        ...dto,
        id,
        email,
        archived: false,
        createdAt: currentDate,
        updatedAt: currentDate,
        customExercises: [],
      });

      await this.userRepository.save(user);
    } else {
      return JSON.stringify({
        message: `User with email ${email} has already registered.`,
      });
    }
  }

  public async updateUser({ id, ...dto }: UpdateUserDto) {
    const user = await this.userRepository.findOne({ where: { id } });

    if (!user) {
      return JSON.stringify({
        message: `Cannot find user.`,
      });
    }

    await this.userRepository.update({ id }, { ...dto });
  }

  public async removeUser(id: string) {
    const user = await this.userRepository.findOne({ where: { id } });

    if (!user) {
      return JSON.stringify({
        message: `Cannot find user.`,
      });
    }

    await this.userRepository.update({ id }, { archived: true });
  }

  public async recoverUser(id: string) {
    const user = await this.userRepository.findOne({ where: { id } });

    if (!user) {
      return JSON.stringify({
        message: `Cannot find user.`,
      });
    }

    await this.userRepository.update({ id }, { archived: false });
  }
}
