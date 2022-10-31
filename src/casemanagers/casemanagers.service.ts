import { Injectable } from '@nestjs/common';
import { CreateCasemanagerDto } from './dto/create-casemanager.dto';
import { UpdateCasemanagerDto } from './dto/update-casemanager.dto';

@Injectable()
export class CasemanagersService {
  create(createCasemanagerDto: CreateCasemanagerDto) {
    return 'This action adds a new casemanager';
  }

  findAll() {
    return `This action returns all casemanagers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} casemanager`;
  }

  update(id: number, updateCasemanagerDto: UpdateCasemanagerDto) {
    return `This action updates a #${id} casemanager`;
  }

  remove(id: number) {
    return `This action removes a #${id} casemanager`;
  }
}
