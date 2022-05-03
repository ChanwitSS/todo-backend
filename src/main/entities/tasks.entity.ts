import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('tasks')
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name' })
  name: string;
  @Column({ name: 'detail' })
  detail: number;
  
  @Column({ name: 'start_date', nullable: true })
  startDate: Date;
  @Column({ name: 'end_date', nullable: true })
  endDate: Date;

  @Column({ name: 'active', default: true })
  active: boolean;
  @Column({ name: 'deleted', default: false })
  deleted: boolean;
  @CreateDateColumn({ name: 'createdAt' })
  createdAt: Date;
  @UpdateDateColumn({ name: 'updatedAt' })
  updateAt: Date;

//   @OneToOne((type) => Address, {
//     eager: true,
//     nullable: true,
//     cascade: true,
//   })
//   @JoinColumn({ name: 'addressId' })
//   address: Address;
}
