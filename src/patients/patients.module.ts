import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PatientsController } from './patients.controller';
import { PatientsService } from './patients.service';

@Module({
  controllers: [PatientsController],
  providers: [PatientsService],
  imports: [PrismaModule],
})
export class PatientsModule {}
