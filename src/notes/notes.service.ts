import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';

@Injectable()
export class NotesService {
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
    return await this.prisma.note.findUnique({ where: { id } });
  }

  update(id: number, updateNoteDto: UpdateNoteDto) {
    return this.prisma.note.update({
      where: { id },
      data: updateNoteDto,
    });
  }

  remove(id: number) {
    return this.prisma.note.delete({
      where: { id },
    });
  }
}
