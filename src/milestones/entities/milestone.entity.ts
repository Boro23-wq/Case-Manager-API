import { ApiProperty } from '@nestjs/swagger';
import { Milestone } from '@prisma/client';

export class MilestoneEntity implements Milestone {
  @ApiProperty()
  id: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  modifiedAt: Date;

  @ApiProperty()
  description: string;

  @ApiProperty()
  caseId: number;
}
