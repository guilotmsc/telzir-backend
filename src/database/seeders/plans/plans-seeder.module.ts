import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlanEntity } from '../../../modules/plans/entities/plan.entity';
import { PlansSeederService } from './plans-seeder.service';

@Module({
  imports: [TypeOrmModule.forFeature([PlanEntity])],
  providers: [PlansSeederService],
  exports: [PlansSeederService],
})
export class PlansSeederModule {}
