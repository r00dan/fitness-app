import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';

import { UserUseCase, CreateUserDto, UpdateUserDto } from 'user';

@Controller('user')
export class UserController {
  constructor(private readonly userUseCase: UserUseCase) {}

  @Get('/:id')
  public async get(@Param('id') id: string) {
    return this.userUseCase.getUserInfo(id);
  }

  @Post()
  public async create(@Body() dto: CreateUserDto) {
    return this.userUseCase.createUserIfNotExist(dto);
  }

  @Put('/:id')
  public async update(@Param('id') id: string, @Body() dto: UpdateUserDto) {
    return this.userUseCase.updateUser(id, dto);
  }
}
