import { Expose } from 'class-transformer';

export class TaskDto {
  @Expose()
  public id?: number;
  @Expose()
  name: string;
  @Expose()
  detail: string;
  @Expose()
  startDate: Date;
  @Expose()
  endDate: Date;
}
