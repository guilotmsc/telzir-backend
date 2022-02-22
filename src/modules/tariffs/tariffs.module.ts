import { Module } from '@nestjs/common';
import { TariffsService } from './tariffs.service';
import { TariffsController } from './tariffs.controller';
import { PlansService } from '../plans/plans.service';

@Module({
  controllers: [TariffsController],
  providers: [TariffsService, PlansService],
  exports: [TariffsService],
})
export class TariffsModule {}
