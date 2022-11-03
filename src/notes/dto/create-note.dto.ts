import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateNoteDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  comment: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  caseId: number;
}
