import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCasemanagerDto } from './dto/create-casemanager.dto';
import { UpdateCasemanagerDto } from './dto/update-casemanager.dto';

@Injectable()
export class CasemanagersService {
  constructor(private prisma: PrismaService) {}

  create(createCasemanagerDto: CreateCasemanagerDto) {
    return this.prisma.caseManager.create({ data: createCasemanagerDto });
  }

  async findAll(params: { skip?: number; take?: number }) {
    const { skip, take } = params;

    if (isNaN(skip)) return this.prisma.caseManager.findMany({ take });

    return this.prisma.caseManager.findMany({
      skip,
      take,
    });
  }

  async findOne(id: number) {
    return await this.prisma.caseManager.findUnique({ where: { id } });
  }

  update(id: number, updateCasemanagerDto: UpdateCasemanagerDto) {
    return this.prisma.caseManager.update({
      where: { id },
      data: updateCasemanagerDto,
    });
  }

  updateProfile(id: number, url: string) {
    return this.prisma.caseManager.update({
      where: { id },
      data: {
        profileUrl: url,
      },
    });
  }

  remove(id: number) {
    return this.prisma.caseManager.delete({
      where: { id },
    });
  }
}
