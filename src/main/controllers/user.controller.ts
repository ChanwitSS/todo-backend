import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  ClassSerializerInterceptor,
  UseInterceptors,
  UseGuards,
  Query,
  Delete,
} from '@nestjs/common';
import { User } from 'main/entities';
import { UserDto } from 'main/dto';
import { UserService } from 'main/services';
import { JwtAuthGuard } from 'auth/auth.guard';

@UseInterceptors(ClassSerializerInterceptor)
@UseGuards(JwtAuthGuard)
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('')
  async find(@Query() query: any) {
    return await this.userService.find(query);
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.userService.findOne({ id: +id });
  }

  @Post('create')
  async create(@Body() input: any): Promise<User> {
    return await this.userService.create(input);
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() input: any,
  ): Promise<User> {
    return await this.userService.update(+id, input);
  }

  @Delete('delete/:id')
  async delete(@Param('id') id: number): Promise<User> {
    return await this.userService.delete(+id);
  }
}
