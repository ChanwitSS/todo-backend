import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskController, UserController } from './controllers';
import { Task, User } from './entities';
import { TaskService, UserService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([Task, User])],
  controllers: [TaskController, UserController],
  providers: [TaskService, UserService],
})
export class MainModule {}
