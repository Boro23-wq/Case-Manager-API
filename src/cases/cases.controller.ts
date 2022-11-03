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
import { CreateMilestoneDto } from 'src/milestones/dto/create-milestone.dto';
import { MilestoneEntity } from 'src/milestones/entities/milestone.entity';
import { CreateNoteDto } from 'src/notes/dto/create-note.dto';
import { NoteEntity } from 'src/notes/entities/note.entity';
import { PrismaClientExceptionFilter } from 'src/primsa-client-exception/prisma-client-exception.filter';
import { CreateSolutionDto } from 'src/solutions/dto/create-solution.dto';
import { SolutionEntity } from 'src/solutions/entities/solution.entity';
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

  @Post(':id/casenotes')
  @ApiCreatedResponse({ type: NoteEntity })
  createNote(
    @Param('id', ParseIntPipe) id: number,
    @Body() createNoteDto: CreateNoteDto,
  ) {
    return this.casesService.createNote(id, createNoteDto);
  }

  @Post(':id/solutions')
  @ApiCreatedResponse({ type: SolutionEntity })
  createSolution(
    @Param('id', ParseIntPipe) id: number,
    @Body() createSolutionDto: CreateSolutionDto,
  ) {
    return this.casesService.createSolution(id, createSolutionDto);
  }

  @Post(':id/milestones')
  @ApiCreatedResponse({ type: MilestoneEntity })
  createMilestone(
    @Param('id', ParseIntPipe) id: number,
    @Body() createMilestoneDto: CreateMilestoneDto,
  ) {
    return this.casesService.createMilestone(id, createMilestoneDto);
  }

  @Get()
  @ApiCreatedResponse({ type: CaseEntity, isArray: true })
  async findAll(
    @Query('skip', new DefaultValuePipe(0)) skip: string,
    @Query('take', new DefaultValuePipe(10)) take: string,
  ) {
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

  @Get(':id/solutions')
  @ApiCreatedResponse({ type: SolutionEntity })
  async findSolutions(@Param('id', ParseIntPipe) id: number) {
    const solutions = await this.casesService.findSolutions(id);

    if (!solutions) {
      throw new NotFoundException(`Solutions for Case ID: ${id} not found.`);
    }

    return solutions;
  }

  @Get(':id/solutions/:solutionId')
  @ApiCreatedResponse({ type: SolutionEntity })
  async findASolution(
    @Param('id', ParseIntPipe) id: number,
    @Param('solutionId', ParseIntPipe) solutionId: number,
  ) {
    const solution = await this.casesService.findASolution(id, solutionId);

    if (!solution) {
      throw new NotFoundException(
        `Solution with Case ID: ${id} and Solution ID: ${solutionId} not found.`,
      );
    }

    return solution;
  }

  @Get(':id/milestones')
  @ApiCreatedResponse({ type: MilestoneEntity })
  async findMilestones(@Param('id', ParseIntPipe) id: number) {
    const milestones = await this.casesService.findMilestones(id);

    if (!milestones) {
      throw new NotFoundException(`Milestones for Case ID: ${id} not found.`);
    }

    return milestones;
  }

  @Get(':id/milestones/:milestoneId')
  @ApiCreatedResponse({ type: MilestoneEntity })
  async findAMilestone(
    @Param('id', ParseIntPipe) id: number,
    @Param('milestoneId', ParseIntPipe) milestoneId: number,
  ) {
    const milestone = await this.casesService.findAMilestone(id, milestoneId);

    if (!milestone) {
      throw new NotFoundException(
        `Milestone with Case ID: ${id} and Milestone ID: ${milestoneId} not found.`,
      );
    }

    return milestone;
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: CaseEntity })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCaseDto: UpdateCaseDto,
  ) {
    return this.casesService.update(id, updateCaseDto);
  }

  @Delete(':id/casenotes/:noteId')
  @ApiCreatedResponse({ type: NoteEntity })
  removeNote(
    @Param('id', ParseIntPipe) id: number,
    @Param('noteId', ParseIntPipe) noteId: number,
  ) {
    return this.casesService.removeNote(id, noteId);
  }

  @Delete(':id')
  @ApiCreatedResponse({ type: CaseEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.casesService.remove(id);
  }
}
