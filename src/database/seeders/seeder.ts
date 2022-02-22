import { Injectable } from '@nestjs/common';
import { BaseSeeder } from './base.seeder';
import { TariffsSeederService } from './tariffs/tariffs-seeder.service';
import { PlansSeederService } from './plans/plans-seeder.service';

@Injectable()
export class Seeder {
  constructor(
    private readonly tariffSeederService: TariffsSeederService,
    private readonly planSeederService: PlansSeederService,
  ) {}

  /**
   * Executa todos os seeders
   *
   * @returns
   */
  async seed() {
    const seeders = Object.values(this).filter(
      (property) => property instanceof BaseSeeder,
    );
    await Promise.all(seeders.map((seeder) => seeder.seed()));
  }
}
