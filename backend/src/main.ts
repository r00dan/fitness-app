import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const whiteList = ['http://localhost:5173'];

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin(origin, callback) {
      if (!origin || whiteList.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
  });

  await app.listen(7007);
}

bootstrap();
