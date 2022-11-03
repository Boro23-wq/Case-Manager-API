import { Injectable } from '@nestjs/common';
import { CreateMilestoneDto } from 'src/milestones/dto/create-milestone.dto';
import { CreateNoteDto } from 'src/notes/dto/create-note.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSolutionDto } from 'src/solutions/dto/create-solution.dto';
import { CreateCaseDto } from './dto/create-case.dto';
import { UpdateCaseDto } from './dto/update-case.dto';

@Injectable()
export class CasesService {
  constructor(private prisma: PrismaService) {}

  create(createCaseDto: CreateCaseDto) {
    return this.prisma.patientCase.create({ data: createCaseDto });
  }

  createNote(id: number, createNoteDto: CreateNoteDto) {
    return this.prisma.note.create({
      data: {
        comment: createNoteDto.comment,
        caseId: id,
      },
    });
  }

  createSolution(id: number, createSolutionDto: CreateSolutionDto) {
    return this.prisma.solution.create({
      data: {
        subject: createSolutionDto.subject,
        investigation: createSolutionDto.investigation,
        resolution: createSolutionDto.resolution,
        caseId: id,
      },
    });
  }

  createMilestone(id: number, createMilestoneDto: CreateMilestoneDto) {
    return this.prisma.milestone.create({
      data: {
        description: createMilestoneDto.description,
        caseId: id,
      },
    });
  }

  async findAll(params: { skip?: number; take?: number }) {
    const { skip, take } = params;

    if (isNaN(skip)) return this.prisma.patientCase.findMany({ take });

    return this.prisma.patientCase.findMany({
      skip,
      take,
    });
  }

  async findOne(id: number) {
    return await this.prisma.patientCase.findUnique({ where: { id } });
  }

  async findNotes(id: number) {
    return await this.prisma.note.findMany({ where: { caseId: id } });
  }

  async findANote(id: number, noteId: number) {
    return await this.prisma.note.findUnique({
      where: {
        uniqueNote: {
          id: noteId,
          caseId: id,
        },
      },
    });
  }

  async findSolutions(id: number) {
    return await this.prisma.solution.findMany({ where: { caseId: id } });
  }

  async findASolution(id: number, solutionId: number) {
    return await this.prisma.solution.findUnique({
      where: {
        uniqueSolution: {
          id: solutionId,
          caseId: id,
        },
      },
    });
  }

  async findMilestones(id: number) {
    return await this.prisma.milestone.findMany({ where: { caseId: id } });
  }

  async findAMilestone(id: number, milestoneId: number) {
    return await this.prisma.milestone.findUnique({
      where: {
        uniqueMilestone: {
          id: milestoneId,
          caseId: id,
        },
      },
    });
  }

  update(id: number, updateCaseDto: UpdateCaseDto) {
    return this.prisma.patientCase.update({
      where: { id },
      data: updateCaseDto,
    });
  }

  removeNote(id: number, noteId: number) {
    return this.prisma.note.delete({
      where: {
        uniqueNote: {
          id: noteId,
          caseId: id,
        },
      },
    });
  }

  remove(id: number) {
    return this.prisma.patientCase.delete({
      where: { id },
    });
  }
}
