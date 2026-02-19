import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule, JwtModuleOptions } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { Business, BusinessSchema } from 'src/businesses/schemas/business.schema';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';
import {
  BusinessObjectMap,
  BusinessObjectMapSchema,
} from 'src/objects/schemas/business-object-map.schema';
import { CrmObject, CrmObjectSchema } from 'src/objects/schemas/object.schema';
import { FieldsController } from './controllers/fields.controller';
import { FieldsService } from './fields.service';
import { CrmField, CrmFieldSchema } from './schemas/field.schema';
import { ObjectFieldMap, ObjectFieldMapSchema } from './schemas/object-field-map.schema';

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
      { name: CrmField.name, schema: CrmFieldSchema },
      { name: ObjectFieldMap.name, schema: ObjectFieldMapSchema },
      { name: CrmObject.name, schema: CrmObjectSchema },
      { name: BusinessObjectMap.name, schema: BusinessObjectMapSchema },
      { name: Business.name, schema: BusinessSchema },
    ]),
  ],
  controllers: [FieldsController],
  providers: [FieldsService, JwtAuthGuard],
  exports: [FieldsService],
})
export class FieldsModule {}
