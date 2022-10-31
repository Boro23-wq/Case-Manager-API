import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CasemanagersService } from './casemanagers.service';
import { CreateCasemanagerDto } from './dto/create-casemanager.dto';
import { UpdateCasemanagerDto } from './dto/update-casemanager.dto';

@Controller('casemanagers')
export class CasemanagersController {
  constructor(private readonly casemanagersService: CasemanagersService) {}

  @Post()
  create(@Body() createCasemanagerDto: CreateCasemanagerDto) {
    return this.casemanagersService.create(createCasemanagerDto);
  }

  @Get()
  findAll() {
    return this.casemanagersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.casemanagersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCasemanagerDto: UpdateCasemanagerDto) {
    return this.casemanagersService.update(+id, updateCasemanagerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.casemanagersService.remove(+id);
  }
}
