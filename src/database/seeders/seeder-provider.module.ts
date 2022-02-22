import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import databaseService from '../../modules/common/config/typeorm.config';
import { TariffEntity } from '../../modules/tariffs/entities/tariff.entity';
import { PlanEntity } from '../../modules/plans/entities/plan.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () => ({
        ...databaseService.ormConfig(),
        entities: [TariffEntity, PlanEntity],
      }),
    }),
  ],
})
export class SeederProviderModule {}
