import { Test, TestingModule } from '@nestjs/testing';
import { CasemanagersController } from './casemanagers.controller';
import { CasemanagersService } from './casemanagers.service';

describe('CasemanagersController', () => {
  let controller: CasemanagersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CasemanagersController],
      providers: [CasemanagersService],
    }).compile();

    controller = module.get<CasemanagersController>(CasemanagersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
