import { PartialType } from '@nestjs/mapped-types';
import { CreateCasemanagerDto } from './create-casemanager.dto';

export class UpdateCasemanagerDto extends PartialType(CreateCasemanagerDto) {}
