import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule, JwtModuleOptions } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';
import { BusinessesController } from './controllers/businesses.controller';
import { BusinessesService } from './businesses.service';
import { Business, BusinessSchema } from './schemas/business.schema';
import { BusinessThemesModule } from 'src/business-themes/business-themes.module';

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
    MongooseModule.forFeature([{ name: Business.name, schema: BusinessSchema }]),
    BusinessThemesModule,
  ],
  controllers: [BusinessesController],
  providers: [BusinessesService, JwtAuthGuard],
  exports: [BusinessesService],
})
export class BusinessesModule {}
