import { CreateHouseInput } from './create-house.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateHouseInput extends PartialType(CreateHouseInput) {
  @Field(() => Int)
  id: number;
}
