import { ApiProperty } from '@nestjs/swagger';
import { Doctor } from '@prisma/client';

export class DoctorEntity implements Doctor {
  @ApiProperty()
  id: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  modifiedAt: Date;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  email: string;

  @ApiProperty({ required: false, nullable: true })
  profession: string | null;
}
