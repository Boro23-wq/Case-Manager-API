import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateCasemanagerDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  lastName: string;

  @IsString()
  @MinLength(10)
  @MaxLength(15)
  @ApiProperty()
  phone: string;

  @IsEmail()
  @ApiProperty()
  email: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  profileUrl: string;
}
