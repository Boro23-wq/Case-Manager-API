import { ApiProperty } from '@nestjs/swagger';
import { Solution } from '@prisma/client';

export class SolutionEntity implements Solution {
  @ApiProperty()
  id: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  modifiedAt: Date;

  @ApiProperty()
  subject: string;

  @ApiProperty()
  investigation: string;

  @ApiProperty()
  resolution: string;

  @ApiProperty()
  caseId: number;
}
