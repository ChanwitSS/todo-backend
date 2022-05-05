import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { JwtAuthGuard } from 'auth/auth.guard';
import { Task } from 'main/entities';
import { TaskDto } from 'main/dto';
import { TaskService } from 'main/services';

@UseInterceptors(ClassSerializerInterceptor)
// @UseGuards(JwtAuthGuard)
@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get('')
  async find(@Query() query: any): Promise<Task[]> {
    return await this.taskService.find(query);
  }

  @Get('/incoming')
  async findIncoming(@Query() query: any) {
    return await this.taskService.findIncoming();
  }

  @Get('/finished')
  async findFinished(@Query() query: any) {
    return await this.taskService.findFinished();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Task> {
    return await this.taskService.findOne({ id: +id });
  }

  @Post('')
  async createDeposit(@Body() input: TaskDto): Promise<Task> {
    return await this.taskService.create(input);
  }

  @Patch(':id')
  async updateDeposit(
    @Param('id') id: number,
    @Body() input: TaskDto,
  ): Promise<Task> {
    return await this.taskService.update(id, input);
  }

  @Delete(':id')
  async deleteDeposit(@Param('id') id: number): Promise<Task> {
    return await this.taskService.delete(+id);
  }
}
