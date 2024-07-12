import {
  Controller,
  Get,
  Delete,
  Post,
  Patch,
  Param,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { UsersService } from './user.service';
import { CreateUserDto } from './dto/user-create.dto';
import { UpdateUserDto } from './dto/user-update.dto';
import { Result } from '../../utils/result/index';

@Controller('/users')
@ApiTags('users')
export class UserController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @ApiOperation({ summary: '查询所有用户' })
  async getAll(): Promise<Result> {
    const users = await this.usersService.findAll();
    console.log(users);
    return Result.ok(users);
  }

  @Get(':id')
  @ApiOperation({ summary: '根据id查询单个用户' })
  async getUserById(@Param('id', ParseIntPipe) id: number): Promise<Result> {
    const user = await this.usersService.findOne(id);
    return Result.ok(user);
  }

  @Post()
  @ApiOperation({ summary: '创建新用户' })
  async create(@Body() createUserDto: CreateUserDto): Promise<Result> {
    const user = await this.usersService.create(createUserDto);
    return Result.ok(user);
  }

  @Patch(':id')
  @ApiOperation({ summary: '根据id更新指定用户信息' })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<Result> {
    const res = this.usersService.update(id, updateUserDto);
    return Result.ok(res);
  }

  @Delete(':id')
  @ApiOperation({ summary: '根据id删除指定用户' })
  async delUserById(@Param('id', ParseIntPipe) id: number): Promise<Result> {
    const res = this.usersService.remove(id);
    console.log(res);
    return Result.ok(res);
  }
}
