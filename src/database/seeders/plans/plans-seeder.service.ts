import { Injectable } from '@nestjs/common';
import { PlanEntity } from '../../../modules/plans/entities/plan.entity';
import { BaseSeeder } from '../base.seeder';
import { data } from './data';
import * as _ from 'lodash';

@Injectable()
export class PlansSeederService extends BaseSeeder<PlanEntity> {
  protected async getData(): Promise<PlanEntity[]> {
    return Promise.all(
      _.map(
        data,
        (item: PlanEntity) => new PlanEntity(item.name, item.free_minutes),
      ),
    );
  }

  async seed() {
    return this.insert(await this.getData(), async (manager, plan) => {
      return !!(await manager.findOne(PlanEntity, {
        where: {
          name: plan.name,
          free_minutes: plan.free_minutes,
        },
      }));
    });
  }
}
