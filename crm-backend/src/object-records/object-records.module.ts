import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule, JwtModuleOptions } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { Business, BusinessSchema } from 'src/businesses/schemas/business.schema';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';
import { CrmField, CrmFieldSchema } from 'src/fields/schemas/field.schema';
import { ObjectFieldMap, ObjectFieldMapSchema } from 'src/fields/schemas/object-field-map.schema';
import {
  BusinessObjectMap,
  BusinessObjectMapSchema,
} from 'src/objects/schemas/business-object-map.schema';
import { CrmObject, CrmObjectSchema } from 'src/objects/schemas/object.schema';
import { ObjectRecordsController } from './controllers/object-records.controller';
import { ObjectRecordsService } from './object-records.service';
import { ObjectListView, ObjectListViewSchema } from './schemas/object-list-view.schema';
import { ObjectRecord, ObjectRecordSchema } from './schemas/object-record.schema';

@Module({
  imports: [
    ConfigModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService): JwtModuleOptions => {
        const expiresEnv = configService.get<string>('JWT_EXPIRES_IN');
        const expiresIn =
          expiresEnv && /^\d+$/.test(expiresEnv) ? Number(expiresEnv) : expiresEnv ?? '1d';

        return {
          secret: configService.get<string>('JWT_SECRET'),
          signOptions: {
            expiresIn: expiresIn as any,
          },
        };
      },
    }),
    MongooseModule.forFeature([
      { name: ObjectRecord.name, schema: ObjectRecordSchema },
      { name: CrmObject.name, schema: CrmObjectSchema },
      { name: Business.name, schema: BusinessSchema },
      { name: BusinessObjectMap.name, schema: BusinessObjectMapSchema },
      { name: ObjectFieldMap.name, schema: ObjectFieldMapSchema },
      { name: CrmField.name, schema: CrmFieldSchema },
      { name: ObjectListView.name, schema: ObjectListViewSchema },
    ]),
  ],
  controllers: [ObjectRecordsController],
  providers: [ObjectRecordsService, JwtAuthGuard],
  exports: [ObjectRecordsService],
})
export class ObjectRecordsModule {}
