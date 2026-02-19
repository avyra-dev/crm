import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { BusinessThemesModule } from './business-themes/business-themes.module';
import { BusinessesModule } from './businesses/businesses.module';
import { FieldsModule } from './fields/fields.module';
import { ObjectsModule } from './objects/objects.module';
import { ObjectRecordsModule } from './object-records/object-records.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
      }),
    }),
    UsersModule,
    BusinessThemesModule,
    BusinessesModule,
    ObjectsModule,
    FieldsModule,
    ObjectRecordsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
