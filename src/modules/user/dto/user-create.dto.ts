import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  MaxLength,
  Length,
  IsEmail,
} from 'class-validator';

export class CreateUserDto {
  @MaxLength(16)
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsEmail()
  @IsString()
  @ApiProperty()
  email: string;

  @Length(6, 16)
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  account: string;

  @IsString()
  @IsNotEmpty()
  @Length(6, 16)
  @ApiProperty()
  password: string;
}
