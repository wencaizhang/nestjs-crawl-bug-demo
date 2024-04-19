import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());;

  const options = new DocumentBuilder()
    .setTitle('crawler-nestjs')
    .setDescription('crawler-nestjs API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
  console.log('\napp run: ', 'http://localhost:3000')
  console.log('\nswagger run: ', 'http://localhost:3000/api\n')
}
bootstrap();
