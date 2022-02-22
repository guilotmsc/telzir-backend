import { Module } from '@nestjs/common';
import { TariffsModule } from './modules/tariffs/tariffs.module';
import { PlansModule } from './modules/plans/plans.module';
import { CommonModule } from './modules/common/common.module';

@Module({
  imports: [CommonModule, TariffsModule, PlansModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
