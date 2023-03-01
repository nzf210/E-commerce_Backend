import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { UserService } from './user/user.service';
import { HasuraInsertEvent, HasuraUpdateEvent, TrackedHasuraEventHandler } from '@golevelup/nestjs-hasura';
import { Query, Resolver } from '@nestjs/graphql';
import { ApolloServer } from 'apollo-server-express';

interface User {
  id: string;
  first_name: string;
  last_name: string;
  level: string;
  id_akun: string;
  email: string;
}


@Controller()
export class AppController {

  constructor(
    private readonly appService: AppService,
    private readonly userService: UserService,
  ) {

  }

  @Get()
  getPayment(): any {
    console.log('ini adalah get coba');
    return this.appService.getHello();
  }

  @Get('v1')
  getVone() {
    console.log('ini adalah get coba');
    // return this.appService.getHello();
  }

  @Post()
  postPayment() {
    return this.appService.postData();
  }

  @Post('v1')
  postEvent(@Body() data: any) {
    return this.appService.postDataEvent(data);
  }
}

