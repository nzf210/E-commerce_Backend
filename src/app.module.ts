import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaymentModule } from './payment/payment.module';
import { HouseModule } from './house/house.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { HasuraModule } from '@golevelup/nestjs-hasura';
import { join } from 'path';
import { UserService } from './user/user.service';

@Module({
  imports: [PaymentModule, PaymentModule, HouseModule
    , GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      // autoSchemaFile: 'schema.gql'
      autoSchemaFile: true
    }),
    // HasuraModule.forRoot(HasuraModule, {
    //   webhookConfig: {
    //     secretFactory: 'qwerty',
    //     secretHeader: 'HASURA_GRAPHQL_ADMIN_SECRET',
    //   },
    //   managedMetaDataConfig: {
    //     dirPath: join(process.cwd(), 'hasura/metadata/databases'),
    //     secretHeaderEnvName: 'HASURA_GRAPHQL_ADMIN_SECRET',
    //     nestEndpointEnvName: 'NESTJS_EVENT_WEBHOOK_ENDPOINT',
    //     defaultEventRetryConfig: {
    //       intervalInSeconds: 15,
    //       numRetries: 3,
    //       timeoutInSeconds: 100,
    //       toleranceSeconds: 21600,
    //     },
    //   },
    // }),
  ],
  controllers: [AppController],
  providers: [AppService, UserService],
})


export class AppModule { }
