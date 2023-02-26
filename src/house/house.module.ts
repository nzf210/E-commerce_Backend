import { Module } from '@nestjs/common';
import { HouseService } from './house.service';
import { HouseResolver } from './house.resolver';

@Module({
  providers: [HouseResolver, HouseService]
})
export class HouseModule {}
