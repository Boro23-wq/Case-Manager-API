import { ApiProperty } from '@nestjs/swagger';
import { PatientCase } from '@prisma/client';

export class CaseEntity implements PatientCase {
  @ApiProperty()
  id: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  modifiedAt: Date;

  @ApiProperty()
  status: string;

  @ApiProperty()
  subject: string;

  @ApiProperty()
  caseManagerEmail: string;

  @ApiProperty()
  categoryTitle: string;

  @ApiProperty()
  patientEmail: string;

  @ApiProperty()
  severityLevel: string;

  @ApiProperty({ required: false, nullable: true })
  doctorEmail: string | null;
}
