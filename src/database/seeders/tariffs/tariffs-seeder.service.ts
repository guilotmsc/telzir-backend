import { Injectable } from '@nestjs/common';
import { TariffEntity } from '../../../modules/tariffs/entities/tariff.entity';
import { BaseSeeder } from '../base.seeder';
import { data } from './data';
import * as _ from 'lodash';

@Injectable()
export class TariffsSeederService extends BaseSeeder<TariffEntity> {
  protected async getData(): Promise<TariffEntity[]> {
    return Promise.all(
      _.map(
        data,
        (item: TariffEntity) =>
          new TariffEntity(item.origin, item.destination, item.tariff),
      ),
    );
  }

  async seed() {
    return this.insert(await this.getData(), async (manager, tariff) => {
      return !!(await manager.findOne(TariffEntity, {
        where: {
          origin: tariff.origin,
          destination: tariff.destination,
        },
      }));
    });
  }
}
