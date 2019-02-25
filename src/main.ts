import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  app.enableCors({ credentials: true, origin: true, allowedHeaders: 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json' });
  app.use(cookieParser());
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
