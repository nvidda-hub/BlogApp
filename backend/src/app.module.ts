import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import {dataSourceOptions} from 'database/data-source';

const ENV = process.env.NODE_ENV

console.log("ENV : ", ENV)

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
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
