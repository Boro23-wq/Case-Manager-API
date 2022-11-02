import { ApiProperty } from '@nestjs/swagger';
import { Patient } from '@prisma/client';

export class PatientEntity implements Patient {
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
}
