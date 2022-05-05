import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from 'main/entities';
import { TaskDto } from 'main/dto';
import { Repository } from 'typeorm';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}

  async find(where: object): Promise<Task[]> {
    return await this.taskRepository.find(where);
  }

  async findIncoming() {
    return await this.taskRepository
      .createQueryBuilder('task')
      .where('task.endDate >= :now', { now: new Date() })
      .orderBy('task.startDate', 'ASC')
      .getMany();
  }

  async findFinished() {
    return await this.taskRepository
      .createQueryBuilder('task')
      .where('task.endDate < :now', { now: new Date() })
      .orderBy('task.endDate', 'DESC')
      .getMany();
  }

  async findOne(where: object): Promise<Task> {
    return await this.taskRepository.findOne({ ...where });
  }

  async create(input: any): Promise<Task> {
    return this.taskRepository.save(input);
  }

  async update(id: number, input: any): Promise<any> {
    return await this.taskRepository.update(id, input);
  }

  async delete(id: number): Promise<any> {
    return await this.taskRepository.delete(id);
  }
}
