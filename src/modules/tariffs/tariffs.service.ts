import { Injectable } from '@nestjs/common';
import { getManager } from 'typeorm';
import { SelectQueryBuilder } from 'typeorm/query-builder/SelectQueryBuilder';
import { PlansService } from '../plans/plans.service';
import { CalculatePriceDto } from './dto/calculate-price.dto';
import { TariffEntity } from './entities/tariff.entity';

@Injectable()
export class TariffsService {
  constructor(private readonly planService: PlansService) {}

  private generateEntityManager(): SelectQueryBuilder<TariffEntity> {
    return getManager().createQueryBuilder(TariffEntity, 'tariffs');
  }

  async findAll() {
    return await this.generateEntityManager().select().getMany();
  }

  /**
   * Retorna o valor da tarifa calculado de acordo com o plano e o tempo em minutos
   * @param {CalculatePriceDto} params
   * @returns valor calculado
   */
  async calculatePrice(params: CalculatePriceDto) {
    const plan = await this.planService.findOne(params.plan);
    const tariff = await this.findOne(params.tariff);

    return this.calculatePriceWithSurchage(
      plan.free_minutes,
      tariff.tariff,
      params.minutes,
    );
  }

  /**
   * Calcula o valor com um acréscimo de 10% sobre a tarifa original
   * @param {free_minutes} number
   * @param {tariff} number
   * @param {minutes} number
   * @returns valor calculado
   */
  calculatePriceWithSurchage(free_minutes: number, tariff: number, minutes: number) {
    const validMinutes = minutes - free_minutes;
    const priceWithSurchage = +tariff + +((tariff * 10) / 100);
    return validMinutes * priceWithSurchage;
  }

  async findOne(id: number) {
    return await this.generateEntityManager().select().where({ id }).getOne();
  }
}
