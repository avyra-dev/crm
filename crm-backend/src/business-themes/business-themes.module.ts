import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule, JwtModuleOptions } from '@nestjs/jwt';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';
import { BusinessThemesController } from './controllers/business-themes.controller';
import { BusinessThemesService } from './business-themes.service';
import { BusinessTheme, BusinessThemeSchema } from './schemas/business-theme.schema';

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
    MongooseModule.forFeature([{ name: BusinessTheme.name, schema: BusinessThemeSchema }]),
  ],
  controllers: [BusinessThemesController],
  providers: [BusinessThemesService, JwtAuthGuard],
  exports: [BusinessThemesService],
})
export class BusinessThemesModule {}
