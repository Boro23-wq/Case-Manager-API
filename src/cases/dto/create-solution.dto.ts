import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class CreateSolutionDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  @ApiProperty()
  subject: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(300)
  @ApiProperty()
  investigation: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(500)
  @ApiProperty()
  resolution: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  caseId: number;
}
