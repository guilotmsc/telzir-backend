import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TariffEntity } from '../../../modules/tariffs/entities/tariff.entity';
import { TariffsSeederService } from './tariffs-seeder.service';

@Module({
  imports: [TypeOrmModule.forFeature([TariffEntity])],
  providers: [TariffsSeederService],
  exports: [TariffsSeederService],
})
export class TariffsSeederModule {}
