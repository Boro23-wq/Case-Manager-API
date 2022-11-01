import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
  Query,
  ParseIntPipe,
  UseFilters,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { PrismaClientExceptionFilter } from 'src/primsa-client-exception/prisma-client-exception.filter';
import { CasemanagersService } from './casemanagers.service';
import { CreateCasemanagerDto } from './dto/create-casemanager.dto';
import { UpdateCasemanagerDto } from './dto/update-casemanager.dto';
import { CasemanagerEntity } from './entities/casemanager.entity';

@Controller('casemanagers')
@ApiTags('casemanagers')
@UseFilters(PrismaClientExceptionFilter)
export class CasemanagersController {
  constructor(private readonly casemanagersService: CasemanagersService) {}

  @Post()
  @ApiCreatedResponse({ type: CasemanagerEntity })
  create(@Body() createCasemanagerDto: CreateCasemanagerDto) {
    return this.casemanagersService.create(createCasemanagerDto);
  }

  @Get()
  @ApiCreatedResponse({ type: CasemanagerEntity, isArray: true })
  async findAll(@Query('skip') skip: string, @Query('take') take: string) {
    return this.casemanagersService.findAll({
      skip: Number(skip),
      take: Number(take),
    });
  }

  @Get(':id')
  @ApiCreatedResponse({ type: CasemanagerEntity })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const caseManager = await this.casemanagersService.findOne(id);

    if (!caseManager) {
      throw new NotFoundException(`Case manager with ID: ${id} not found.`);
    }

    return caseManager;
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: CasemanagerEntity })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCasemanagerDto: UpdateCasemanagerDto,
  ) {
    return this.casemanagersService.update(id, updateCasemanagerDto);
  }

  @Delete(':id')
  @ApiCreatedResponse({ type: CasemanagerEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.casemanagersService.remove(id);
  }
}
