import { PartialType } from '@nestjs/swagger';
import { CreateCaseDto } from './create-case.dto';

export class UpdateCaseDto extends PartialType(CreateCaseDto) {}
