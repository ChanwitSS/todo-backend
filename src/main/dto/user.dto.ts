import { Expose } from 'class-transformer';

export class UserDto {
  @Expose()
  public id?: number;
  @Expose()
  username: string;
  @Expose()
  password: string;
}
