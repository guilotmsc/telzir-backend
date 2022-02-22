// import { ApiProperty } from '@nestjs/swagger';

export class CalculatePriceDto {
  plan: number;
  tariff: number;
  minutes: number;
}
