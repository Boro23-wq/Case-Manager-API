import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CasemanagersModule } from './casemanagers/casemanagers.module';
import { CasesModule } from './cases/cases.module';
import { DoctorsModule } from './doctors/doctors.module';
import { MilestonesModule } from './milestones/milestones.module';
import { NotesModule } from './notes/notes.module';
import { PatientsModule } from './patients/patients.module';
import { PrismaModule } from './prisma/prisma.module';
import { SolutionsModule } from './solutions/solutions.module';

@Module({
  imports: [
    CasemanagersModule,
    CasesModule,
    PatientsModule,
    DoctorsModule,
    PrismaModule,
    NotesModule,
    SolutionsModule,
    MilestonesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
