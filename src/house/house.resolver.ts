import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { HouseService } from './house.service';
import { House } from './entities/house.entity';
import { CreateHouseInput } from './dto/create-house.input';
import { UpdateHouseInput } from './dto/update-house.input';

@Resolver(() => House)
export class HouseResolver {
  constructor(private readonly houseService: HouseService) {}

  @Mutation(() => House)
  createHouse(@Args('createHouseInput') createHouseInput: CreateHouseInput) {
    return this.houseService.create(createHouseInput);
  }

  @Query(() => [House], { name: 'house' })
  findAll() {
    return this.houseService.findAll();
  }

  @Query(() => House, { name: 'house' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.houseService.findOne(id);
  }

  @Mutation(() => House)
  updateHouse(@Args('updateHouseInput') updateHouseInput: UpdateHouseInput) {
    return this.houseService.update(updateHouseInput.id, updateHouseInput);
  }

  @Mutation(() => House)
  removeHouse(@Args('id', { type: () => Int }) id: number) {
    return this.houseService.remove(id);
  }
}
