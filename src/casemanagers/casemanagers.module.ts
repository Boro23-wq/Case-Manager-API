import { Module } from '@nestjs/common';
import { CasemanagersService } from './casemanagers.service';
import { CasemanagersController } from './casemanagers.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [CasemanagersController],
  providers: [CasemanagersService],
  imports: [PrismaModule],
})
export class CasemanagersModule {}
