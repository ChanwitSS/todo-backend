import { Exclude } from 'class-transformer';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  AfterLoad,
  ManyToOne,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ name: 'email', nullable: true })
  email: string;
  @Column({ name: 'username', default: false })
  username: string;
  @Exclude()
  @Column({ name: 'password' })
  password: string;

  @Column({ name: 'firstName', nullable: true })
  firstName: string;
  @Column({ name: 'lastName', nullable: true })
  lastName: string;

  @Column({ name: 'companyName', nullable: true })
  companyName: string;

//   @Column({ name: 'addressId', nullable: true })
//   addressId: number;
  @Column({ name: 'birthDate', nullable: true })
  birthDate: Date;
  @Column({ name: 'phoneNo', nullable: true })
  phoneNo: string;

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
