import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateDoctorDto {
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

  @IsOptional()
  @ApiProperty({ required: false })
  profession?: string;
}
