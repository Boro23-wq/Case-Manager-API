import { Module } from '@nestjs/common';
import { CasemanagersService } from './casemanagers.service';
import { CasemanagersController } from './casemanagers.controller';

@Module({
  controllers: [CasemanagersController],
  providers: [CasemanagersService]
})
export class CasemanagersModule {}
