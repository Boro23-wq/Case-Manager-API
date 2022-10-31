import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CasemanagersModule } from './casemanagers/casemanagers.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [CasemanagersModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
