import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
// import { Admin } from '../main/entities/admin.entity';
import { User } from '..//main/entities/user.entity';
import { isPasswordMatched } from '../common/utils/password';
import { Repository } from 'typeorm';
import { AuthDto } from 'main/dto';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async login(input: any): Promise<AuthDto> {
    const user = await this.userRepository.findOne(
      {
        username: input.username,
      },
      {
        select: ['id', 'username', 'password', 'email'],
      },
    );

    if (!isPasswordMatched(user, input.password)) {
      throw new UnauthorizedException({
        error: 'invalid_credentials',
        message: 'Wrong username or password',
      });
    }

    const payload = {
      id: user.id,
      username: user.username,
      email: user.email,
    };
    return {
      token: this.jwtService.sign(payload),
    };
  }
}
