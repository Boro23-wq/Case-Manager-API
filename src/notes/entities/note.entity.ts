import { ApiProperty } from '@nestjs/swagger';
import { Note, PatientCase } from '@prisma/client';

export class NoteEntity implements Note {
  @ApiProperty()
  id: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  modifiedAt: Date;

  @ApiProperty()
  caseId: number;

  @ApiProperty()
  comment: string;
}
