import { Controller, Post, Body, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './auth.guard';
import { UserService } from 'main/services';
import { UserDto } from 'main/dto';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Body() input: any) {
    return await this.authService.login(input);
  }

  @UseGuards(LocalAuthGuard)
  @Post('register')
  async register(@Body() input: UserDto) {
    return this.userService.create(input);
  }
}
