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
import { UpdateMilestoneDto } from './dto/update-milestone.dto';
import { MilestoneEntity } from './entities/milestone.entity';
import { MilestonesService } from './milestones.service';

@Controller('milestones')
@ApiTags('milestones')
@UseFilters(PrismaClientExceptionFilter)
export class MilestonesController {
  constructor(private readonly milestonesService: MilestonesService) {}

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
  @ApiCreatedResponse({ type: MilestoneEntity })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const milestone = await this.milestonesService.findOne(id);

    if (!milestone) {
      throw new NotFoundException(`Milestone with ID: ${id} not found.`);
    }

    return milestone;
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: MilestoneEntity })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateMilestoneDto: UpdateMilestoneDto,
  ) {
    return this.milestonesService.update(id, updateMilestoneDto);
  }

  @Delete(':id')
  @ApiCreatedResponse({ type: MilestoneEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.milestonesService.remove(id);
  }
}
