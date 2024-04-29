import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import {DocumentBuilder,SwaggerModule} from '@nestjs/swagger'
import { INestApplication,  } from '@nestjs/common';
import helmet from 'helmet';
import { ConfigService } from '@nestjs/config';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(helmet())
  app.enableCors()
  app.get(ConfigService);
  enableSwaggerUI(app)
  await app.listen(3000);
}
function enableSwaggerUI(app:INestApplication){
  const swaggerConfig=new DocumentBuilder()
  .setTitle('Employee management')
  .setDescription('The Employee management API documentation.')
  .setVersion('1.0')
  .addBearerAuth()
  .build();

  const document=SwaggerModule.createDocument(app,swaggerConfig)
  SwaggerModule.setup('api',app,document)
}
bootstrap();
