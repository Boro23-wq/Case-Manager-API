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
  DefaultValuePipe,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { PrismaClientExceptionFilter } from 'src/primsa-client-exception/prisma-client-exception.filter';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { NoteEntity } from './entities/note.entity';
import { NotesService } from './notes.service';

@Controller('casenotes')
@ApiTags('casenotes')
@UseFilters(PrismaClientExceptionFilter)
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  // @Post()
  // @ApiCreatedResponse({ type: NoteEntity })
  // create(@Body() createNoteDto: CreateNoteDto) {
  //   return this.notesService.create(createNoteDto);
  // }

  // @Get()
  // @ApiCreatedResponse({ type: NoteEntity, isArray: true })
  // async findAll(
  //   @Query('skip', new DefaultValuePipe(0)) skip: string,
  //   @Query('take', new DefaultValuePipe(10)) take: string,
  // ) {
  //   return this.notesService.findAll({
  //     skip: Number(skip),
  //     take: Number(take),
  //   });
  // }

  @Get(':id')
  @ApiCreatedResponse({ type: NoteEntity })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const note = await this.notesService.findOne(id);

    if (!note) {
      throw new NotFoundException(`Note with ID: ${id} not found.`);
    }

    return note;
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: NoteEntity })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateNoteDto: UpdateNoteDto,
  ) {
    return this.notesService.update(id, updateNoteDto);
  }

  @Delete(':id')
  @ApiCreatedResponse({ type: NoteEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.notesService.remove(id);
  }
}
