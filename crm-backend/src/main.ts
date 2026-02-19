import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { UsersService } from './users/users.service';
import { ResponseInterceptor } from './common/interceptors/response.interceptor';
import { NestExpressApplication } from '@nestjs/platform-express';
import { existsSync, mkdirSync } from 'fs';
import { join } from 'path';

async function bootstrap() {
  const isProduction = process.env.NODE_ENV === 'production';
  if (isProduction) {
    const missingEnvVars = ['MONGODB_URI', 'JWT_SECRET', 'HASH_SECRET'].filter(
      (key) => !process.env[key] || !String(process.env[key]).trim(),
    );
    if (missingEnvVars.length) {
      throw new Error(`Missing required environment variables: ${missingEnvVars.join(', ')}`);
    }

    const jwtSecret = String(process.env.JWT_SECRET || '');
    if (jwtSecret.length < 32) {
      throw new Error('JWT_SECRET must be at least 32 characters in production');
    }
  }

  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const uploadRoot = join(process.cwd(), 'uploads');
  if (!existsSync(uploadRoot)) {
    mkdirSync(uploadRoot, { recursive: true });
  }
  app.useStaticAssets(uploadRoot, { prefix: '/uploads/' });

  const corsOrigins = process.env.CORS_ORIGIN
    ? process.env.CORS_ORIGIN.split(',').map((origin) => origin.trim()).filter(Boolean)
    : ['http://localhost:4200', 'http://127.0.0.1:4200'];

  app.useGlobalInterceptors(new ResponseInterceptor());
  app.enableCors({
    origin: corsOrigins,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type,Authorization',
  });
  if (process.env.SEED_USERS === 'true') {
    const usersService = app.get(UsersService);
    await usersService.seedUsers();
  }

  app.setGlobalPrefix('api/v1');

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
