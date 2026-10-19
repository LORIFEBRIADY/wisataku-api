import * as fs from 'fs';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
   new ValidationPipe({
     whitelist: true,
   transform: true,
  }),
  );

  const config = new DocumentBuilder()
    .setTitle('WisataKu API')
    .setDescription('Dokumentasi REST API aplikasi WisataKu')
    .setVersion('1.0')
    .addTag('destinasi')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api/docs', app, document);

  // Ekspor dokumentasi OpenAPI
  fs.writeFileSync(
    './openapi.json',
    JSON.stringify(document, null, 2),
  );

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();