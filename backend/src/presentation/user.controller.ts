import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';

import { UserUseCase } from 'src/domain';
import {
  CreateUserDto,
  UpdateUserDto,
  UpdateUserInfoDto,
} from 'src/application/dto';

@Controller('user')
export class UserController {
  constructor(private readonly userUseCase: UserUseCase) {}

  @Get('/:id')
  public async get(@Param('id') id: string) {
    return this.userUseCase.getUserInfo(id);
  }

  @Post()
  public async create(@Body() createUserDto: CreateUserDto) {
    return this.userUseCase.createUserIfNotExist(createUserDto);
  }

  @Put()
  public async update(@Body() updateUserDto: UpdateUserDto) {
    return this.userUseCase.updateUser(updateUserDto);
  }

  @Put('/:id')
  public async updateInfo(
    @Param('id') id: string,
    @Body() updateUserInfoDto: UpdateUserInfoDto,
  ) {
    return this.userUseCase.updateUserInfo(id, updateUserInfoDto);
  }

  @Put('/:id/remove')
  public async remove(@Param('id') id: string) {
    return this.userUseCase.removeUser(id);
  }

  @Put('/:id/recover')
  public async recover(@Param('id') id: string) {
    return this.userUseCase.recoverUser(id);
  }
}
