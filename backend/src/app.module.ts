import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import {dataSourceOptions} from 'database/data-source';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

const ENV = process.env.NODE_ENV

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath : !ENV ? '.env' : `.env.${ENV}`,
      expandVariables : true,
      isGlobal : true,
      cache : true
    }),
    TypeOrmModule.forRootAsync({
      imports : [ConfigModule],
      useFactory : (configService : ConfigService) => dataSourceOptions,
      inject : [ConfigService]
    }),
    UserModule,
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  
}
