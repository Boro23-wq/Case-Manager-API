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
import { UpdateNoteDto } from 'src/notes/dto/update-note.dto';
import { NoteEntity } from 'src/notes/entities/note.entity';
import { NotesService } from 'src/notes/notes.service';
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

  @Get(':id/casenotes')
  @ApiCreatedResponse({ type: NoteEntity })
  async findNotes(@Param('id', ParseIntPipe) id: number) {
    const notes = await this.casesService.findNotes(id);

    if (!notes) {
      throw new NotFoundException(`Notes for Case ID: ${id} not found.`);
    }

    return notes;
  }

  @Get(':id/casenotes/:noteId')
  @ApiCreatedResponse({ type: NoteEntity })
  async findANote(
    @Param('id', ParseIntPipe) id: number,
    @Param('noteId', ParseIntPipe) noteId: number,
  ) {
    const note = await this.casesService.findANote(id, noteId);

    if (!note) {
      throw new NotFoundException(
        `Note with Case ID: ${id} and Note ID: ${noteId} not found.`,
      );
    }

    return note;
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
