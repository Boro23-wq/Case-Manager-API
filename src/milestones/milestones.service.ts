import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateMilestoneDto } from './dto/update-milestone.dto';

@Injectable()
export class MilestonesService {
  constructor(private prisma: PrismaService) {}

  // create(createNoteDto: CreateNoteDto) {
  //   return this.prisma.note.create({ data: createNoteDto });
  // }

  // async findAll(params: { skip?: number; take?: number }) {
  //   const { skip, take } = params;

  //   if (isNaN(skip)) return this.prisma.note.findMany({ take });

  //   return this.prisma.note.findMany({
  //     skip,
  //     take,
  //   });
  // }

  async findOne(id: number) {
    return await this.prisma.milestone.findUnique({ where: { id } });
  }

  update(id: number, UpdateMilestoneDto: UpdateMilestoneDto) {
    return this.prisma.milestone.update({
      where: { id },
      data: UpdateMilestoneDto,
    });
  }

  remove(id: number) {
    return this.prisma.milestone.delete({
      where: { id },
    });
  }
}
