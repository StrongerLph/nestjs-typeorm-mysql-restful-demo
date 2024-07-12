import { Entity, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { BaseEntity } from '../../../base/base.entity';

/*
 * 用户实体
 * name：用户姓名
 * account：登录账号
 * password：登录密码
 * email：用户邮箱账号
 */
@Entity()
export class User extends BaseEntity {
  @ApiProperty()
  @Column({ length: 16, comment: '用户姓名' })
  name: string;

  @ApiProperty()
  @Column({ comment: '用户邮箱账号' })
  email: string;

  @ApiProperty()
  @Column({ length: 16, nullable: false, comment: '用户登录账号' })
  account: string;

  @Exclude()
  @Column({ length: 16, nullable: false, comment: '用户登录密码' })
  password: string;
}
