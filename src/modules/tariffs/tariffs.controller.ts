import {
  Controller,
  Get,
  Query,
} from '@nestjs/common';
import { TariffsService } from './tariffs.service';
import { CalculatePriceDto } from './dto/calculate-price.dto';

@Controller('tariffs')
export class TariffsController {
  constructor(private readonly tariffsService: TariffsService) {}

  @Get()
  findAll() {
    return this.tariffsService.findAll();
  }

  @Get('calculate-tariff')
  async getCalculatedPrice(@Query() params: CalculatePriceDto) {
    return this.tariffsService.calculatePrice(params);
  }
}
