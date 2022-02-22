import { SeederProviderModule } from './seeder-provider.module';
import { Module } from '@nestjs/common';
import { Seeder } from './seeder';
import { TariffsSeederModule } from './tariffs/tariffs-seeder.module';
import { PlansSeederModule } from './plans/plans-seeder.module';

@Module({
  imports: [SeederProviderModule, TariffsSeederModule, PlansSeederModule],
  providers: [Seeder],
})
export class SeederModule {}
