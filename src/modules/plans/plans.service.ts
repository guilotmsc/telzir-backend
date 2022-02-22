import { Injectable } from '@nestjs/common';
import { getManager } from 'typeorm';
import { SelectQueryBuilder } from 'typeorm/query-builder/SelectQueryBuilder';
import { PlanEntity } from './entities/plan.entity';
@Injectable()
export class PlansService {
  private generateEntityManager(): SelectQueryBuilder<PlanEntity> {
    return getManager().createQueryBuilder(PlanEntity, 'plans');
  }

  async findAll(): Promise<PlanEntity[]> {
    return await this.generateEntityManager().select().getMany();
  }

  async findOne(id: number) {
    return await this.generateEntityManager().select().where({ id }).getOne();
  }
}
