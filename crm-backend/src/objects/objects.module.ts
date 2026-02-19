import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule, JwtModuleOptions } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { Business, BusinessSchema } from 'src/businesses/schemas/business.schema';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';
import { ObjectsController } from './controllers/objects.controller';
import { ObjectsService } from './objects.service';
import {
  BusinessObjectMap,
  BusinessObjectMapSchema,
} from './schemas/business-object-map.schema';
import { CrmObject, CrmObjectSchema } from './schemas/object.schema';

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
      { name: CrmObject.name, schema: CrmObjectSchema },
      { name: BusinessObjectMap.name, schema: BusinessObjectMapSchema },
      { name: Business.name, schema: BusinessSchema },
    ]),
  ],
  controllers: [ObjectsController],
  providers: [ObjectsService, JwtAuthGuard],
  exports: [ObjectsService],
})
export class ObjectsModule {}
