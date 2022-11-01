import { PartialType } from '@nestjs/swagger';
import { CreateCasemanagerDto } from './create-casemanager.dto';

export class UpdateCasemanagerDto extends PartialType(CreateCasemanagerDto) {}
