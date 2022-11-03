import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { MilestonesController } from './milestones.controller';
import { MilestonesService } from './milestones.service';

@Module({
  controllers: [MilestonesController],
  providers: [MilestonesService],
  imports: [PrismaModule],
})
export class MilestonesModule {}
