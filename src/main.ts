import { HttpStatus } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const port = process.env.APP_PORT;
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    logger: console,
  });

  app.enableCors({
    origin: /^(.*)/,
    credentials: true,
    allowedHeaders: '*',
    preflightContinue: false,
    optionsSuccessStatus: HttpStatus.OK,
  });

  await app.listen(port);

  console.log('App:: listen on port', port);
}
bootstrap();
