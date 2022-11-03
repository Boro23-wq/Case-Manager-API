import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { DoctorsController } from './doctors.controller';
import { DoctorsService } from './doctors.service';

@Module({
  controllers: [DoctorsController],
  providers: [DoctorsService],
  imports: [PrismaModule],
})
export class DoctorsModule {}
