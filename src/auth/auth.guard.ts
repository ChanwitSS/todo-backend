import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') implements CanActivate {
  canActivate(context: ExecutionContext) {
    return true;
  }
}

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}
