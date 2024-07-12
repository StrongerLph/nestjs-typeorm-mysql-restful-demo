import {
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
/*
 * 数据库实体公共基础信息
 * id: 唯一主键
 * creator: 创建者
 * createdAt：创建日期
 * updater：更新者
 * updatedAt：更新日期
 */
export class BaseEntity {
  @ApiProperty({ type: Number, description: 'id' })
  @PrimaryGeneratedColumn({ type: 'bigint', comment: 'id' })
  id: number;

  @ApiProperty({ type: String, description: '创建者' })
  @Column({ length: 20, nullable: true, comment: '创建者' })
  creator: string | null;

  @ApiProperty({ type: Date, description: '创建时间' })
  @CreateDateColumn({
    type: 'datetime',
    nullable: false,
    name: 'created_at',
    comment: '创建时间',
  })
  createdAt: Date;

  @ApiProperty({ type: String, description: '更新者' })
  @Column({ length: 20, nullable: true, comment: '更新者' })
  updater: string | null;

  @ApiProperty({ type: Date, description: '更新时间' })
  @UpdateDateColumn({
    type: 'datetime',
    name: 'updated_at',
    comment: '更新时间',
  })
  updatedAt: Date;
}
