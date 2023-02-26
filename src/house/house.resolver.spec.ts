import { Test, TestingModule } from '@nestjs/testing';
import { HouseResolver } from './house.resolver';
import { HouseService } from './house.service';

describe('HouseResolver', () => {
  let resolver: HouseResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HouseResolver, HouseService],
    }).compile();

    resolver = module.get<HouseResolver>(HouseResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
