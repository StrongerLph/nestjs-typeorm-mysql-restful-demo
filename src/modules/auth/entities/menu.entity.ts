import { Entity, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from '../../../base/base.entity';

/*
 * 菜单实体
 * name：菜单名称
 * account：登录账号
 * password：登录密码
 * email：用户邮箱账号
 */
@Entity()
export class Menu extends BaseEntity {
  @ApiProperty()
  @Column({ length: 20, nullable: true, comment: '路由标题' })
  title: string;

  @ApiProperty()
  @Column({ length: 20, nullable: true, comment: '路由名称' })
  name: string;

  @ApiProperty()
  @Column({
    type: 'bigint',
    default: null,
    nullable: true,
    comment: '父级路由ID',
  })
  pid: number;

  @ApiProperty()
  @Column({ length: 200, nullable: true, comment: '路由路径' })
  path: string;

  @ApiProperty()
  @Column({ length: 255, nullable: true, comment: '路由组件路径' })
  component: string;

  @ApiProperty()
  @Column({ length: 20, nullable: true, comment: '路由图标' })
  icon: string;

  @ApiProperty()
  @Column({
    type: 'int',
    name: 'order_no',
    nullable: true,
    comment: '路由排序',
  })
  orderNo: number;

  @ApiProperty()
  @Column({ type: 'boolean', default: false, comment: '是否隐藏' })
  hidden: boolean;

  @ApiProperty()
  @Column({
    type: 'boolean',
    name: 'external_link',
    default: false,
    comment: '是否外链',
  })
  externalLink: boolean;
}
