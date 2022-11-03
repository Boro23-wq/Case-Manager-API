import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CasemanagersModule } from './casemanagers/casemanagers.module';
import { CasesModule } from './cases/cases.module';
import { DoctorsModule } from './doctors/doctors.module';
import { NotesModule } from './notes/notes.module';
import { PatientsModule } from './patients/patients.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    CasemanagersModule,
    CasesModule,
    PatientsModule,
    DoctorsModule,
    PrismaModule,
    NotesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
