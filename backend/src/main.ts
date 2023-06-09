import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import { setupSwagger } from './swagger/swagger';

dotenv.config();
const port = process.env.SERVER_PORT || 4000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api'); // Установка префикса для всех роутов

  setupSwagger(app);

  await app.listen(port);
}

bootstrap();
