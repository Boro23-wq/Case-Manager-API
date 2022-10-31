import { Test, TestingModule } from '@nestjs/testing';
import { CasemanagersService } from './casemanagers.service';

describe('CasemanagersService', () => {
  let service: CasemanagersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CasemanagersService],
    }).compile();

    service = module.get<CasemanagersService>(CasemanagersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
