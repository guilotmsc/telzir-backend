import { Test, TestingModule } from '@nestjs/testing';
import { PlansService } from '../../plans/plans.service';
import { TariffsController } from '../tariffs.controller';
import { TariffsService } from '../tariffs.service';
import { data } from './__mock__/tariffs.mock';

describe('TariffsController', () => {
  let controller: TariffsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TariffsController],
      providers: [
        PlansService,
        {
          provide: TariffsService,
          useValue: {
            findAll: jest.fn().mockResolvedValue(data),
          },
        },
      ],
    }).compile();

    controller = module.get<TariffsController>(TariffsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('Deve retornar todas as tarifas', async () => {
    await expect(controller.findAll()).resolves.toEqual(data);
  });
});
