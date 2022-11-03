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
import { DoctorsService } from './doctors.service';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { DoctorEntity } from './entities/doctor.entity';

@Controller('doctors')
@ApiTags('doctors')
@UseFilters(PrismaClientExceptionFilter)
export class DoctorsController {
  constructor(private readonly doctorsService: DoctorsService) {}

  @Post()
  @ApiCreatedResponse({ type: DoctorEntity })
  create(@Body() createDoctorDto: CreateDoctorDto) {
    return this.doctorsService.create(createDoctorDto);
  }

  @Get()
  @ApiCreatedResponse({ type: DoctorEntity, isArray: true })
  async findAll(
    @Query('skip', new DefaultValuePipe(0)) skip: string,
    @Query('take', new DefaultValuePipe(10)) take: string,
  ) {
    return this.doctorsService.findAll({
      skip: Number(skip),
      take: Number(take),
    });
  }

  @Get(':id')
  @ApiCreatedResponse({ type: DoctorEntity })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const doctor = await this.doctorsService.findOne(id);

    if (!doctor) {
      throw new NotFoundException(`Doctor with ID: ${id} not found.`);
    }

    return doctor;
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: DoctorEntity })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDoctorDto: UpdateDoctorDto,
  ) {
    return this.doctorsService.update(id, updateDoctorDto);
  }

  @Delete(':id')
  @ApiCreatedResponse({ type: DoctorEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.doctorsService.remove(id);
  }
}
