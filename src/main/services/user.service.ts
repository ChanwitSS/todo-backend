import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { hashPassword } from 'common/utils/password';
import { User } from 'main/entities';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async find(where: object): Promise<User[]> {
    // const take = query?.take || 10;
    // const page = query?.page || 1;
    // const skip = (page - 1) * take;
    return await this.userRepository.find(where);
  }

  async findOne(where: object): Promise<User> {
    return await this.userRepository.findOne({ ...where });
  }

  async create(input: any): Promise<User> {
    return await this.userRepository.save({
      ...input,
      password: await hashPassword(input.password),
    });
  }

  async update(id: number, input: any): Promise<any> {
    return await this.userRepository.update(id, input);
  }

  async delete(id: number): Promise<any> {
    return await this.userRepository.delete(id);
  }
}
