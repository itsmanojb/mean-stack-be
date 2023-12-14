import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const documentConfig = new DocumentBuilder()
    .setTitle('Rest Backend')
    .setDescription('API collection')
    .setVersion('1.0')
    .addTag('REST')
    .build();

  const apiDocument = SwaggerModule.createDocument(app, documentConfig);
  SwaggerModule.setup('api', app, apiDocument);
  await app.listen(3000);
}
bootstrap();
