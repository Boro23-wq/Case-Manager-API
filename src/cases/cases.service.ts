// "@nestjs/cli": "^9.1.5",
// "@nestjs/schematics": "^9.0.3",

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCaseDto } from './dto/create-case.dto';
import { UpdateCaseDto } from './dto/update-case.dto';

@Injectable()
export class CasesService {
  constructor(private prisma: PrismaService) {}

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

  update(id: number, updateCaseDto: UpdateCaseDto) {
    return this.prisma.patientCase.update({
      where: { id },
      data: updateCaseDto,
    });
  }

  remove(id: number) {
    return this.prisma.patientCase.delete({
      where: { id },
    });
  }
}
