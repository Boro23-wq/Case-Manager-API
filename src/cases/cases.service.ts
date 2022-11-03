// "@nestjs/cli": "^9.1.5",
// "@nestjs/schematics": "^9.0.3",

import { Injectable } from '@nestjs/common';
import { CreateNoteDto } from 'src/notes/dto/create-note.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCaseDto } from './dto/create-case.dto';
import { UpdateCaseDto } from './dto/update-case.dto';

@Injectable()
export class CasesService {
  constructor(private prisma: PrismaService) {}

  createNote(createNoteDto: CreateNoteDto, id: number) {
    return this.prisma.note.create({
      data: {
        comment: createNoteDto.comment,
        caseId: id,
      },
    });
  }

  create(createCaseDto: CreateCaseDto) {
    return this.prisma.patientCase.create({ data: createCaseDto });
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
