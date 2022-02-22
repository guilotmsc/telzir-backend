import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { PlansService } from '../../plans/plans.service';
import { TariffsService } from '../tariffs.service';
import { data } from './__mock__/tariffs.mock';

describe('TariffsService', () => {
  let service: TariffsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PlansService,
        TariffsService,
        {
          provide: getRepositoryToken(TariffsService),
          useValue: data,
        },
      ],
    }).compile();

    service = module.get<TariffsService>(TariffsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
