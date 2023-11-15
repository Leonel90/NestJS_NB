import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //validador pipe general para todo el proyecto
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //data basura
      forbidNonWhitelisted: true,
    }),
  )

  await app.listen(3000);
}
bootstrap();
