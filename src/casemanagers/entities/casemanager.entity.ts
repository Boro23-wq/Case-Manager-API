import { ApiProperty } from '@nestjs/swagger';
import { CaseManager } from '@prisma/client';

export class CasemanagerEntity implements CaseManager {
  @ApiProperty()
  id: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  modifiedAt: Date;

  @ApiProperty()
  userName: string;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  email: string;
}
