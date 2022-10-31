import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CasemanagersModule } from './casemanagers/casemanagers.module';

@Module({
  imports: [CasemanagersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
