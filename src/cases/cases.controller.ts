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
import { CasesService } from './cases.service';
import { CreateCaseDto } from './dto/create-case.dto';
import { UpdateCaseDto } from './dto/update-case.dto';
import { CaseEntity } from './entities/case.entity';

@Controller('cases')
@ApiTags('cases')
@UseFilters(PrismaClientExceptionFilter)
export class CasesController {
  constructor(private readonly casesService: CasesService) {}

  @Post()
  @ApiCreatedResponse({ type: CaseEntity })
  create(@Body() createCaseDto: CreateCaseDto) {
    return this.casesService.create(createCaseDto);
  }

  @Get()
  @ApiCreatedResponse({ type: CaseEntity, isArray: true })
  async findAll(@Query('skip') skip: string, @Query('take') take: string) {
    return this.casesService.findAll({
      skip: Number(skip),
      take: Number(take),
    });
  }

  @Get(':id')
  @ApiCreatedResponse({ type: CaseEntity })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const singleCase = await this.casesService.findOne(id);

    if (!singleCase) {
      throw new NotFoundException(`Case with ID: ${id} not found.`);
    }

    return singleCase;
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: CaseEntity })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCaseDto: UpdateCaseDto,
  ) {
    return this.casesService.update(id, updateCaseDto);
  }

  @Delete(':id')
  @ApiCreatedResponse({ type: CaseEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.casesService.remove(id);
  }
}
