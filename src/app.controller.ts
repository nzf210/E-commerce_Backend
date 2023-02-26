import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    console.log('ini adalah get coba');
    return this.appService.getHello();
  }

  @Post()
  postPayment() {
    return this.appService.postData();
  }
}
