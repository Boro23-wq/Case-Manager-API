import { Module } from '@nestjs/common';
import { CasemanagersService } from './casemanagers.service';
import { CasemanagersController } from './casemanagers.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { S3Service } from 'src/s3/S3.service';

@Module({
  controllers: [CasemanagersController],
  providers: [CasemanagersService, S3Service],
  imports: [PrismaModule],
})
export class CasemanagersModule {}
