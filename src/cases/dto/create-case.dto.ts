import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateCaseDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  status: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(300)
  @ApiProperty()
  subject: string;

  @IsNotEmpty()
  @IsEmail()
  @ApiProperty()
  caseManagerEmail: string;

  @IsNotEmpty()
  @IsEmail()
  @ApiProperty()
  patientEmail: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  categoryTitle: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  severityLevel: string;

  @IsOptional()
  @IsEmail()
  @ApiProperty({ required: false })
  doctorEmail?: string;
}
