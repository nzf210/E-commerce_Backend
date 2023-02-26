import { Injectable } from '@nestjs/common';
import { CreateHouseInput } from './dto/create-house.input';
import { UpdateHouseInput } from './dto/update-house.input';

@Injectable()
export class HouseService {
  create(createHouseInput: CreateHouseInput) {
    return 'This action adds a new house';
  }

  findAll() {
    return `This action returns all house`;
  }

  findOne(id: number) {
    return `This action returns a #${id} house`;
  }

  update(id: number, updateHouseInput: UpdateHouseInput) {
    return `This action updates a #${id} house`;
  }

  remove(id: number) {
    return `This action removes a #${id} house`;
  }
}
