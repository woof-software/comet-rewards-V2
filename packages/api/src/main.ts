// import 'source-map-support/register';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from 'winston';

import { AppModule } from './app.module';
import { config } from './utils/config';
import { mainLogger } from './modules/winston';

const appConfig = config.getTyped('app');

async function start() {
  const APP_PORT = process.env.APP_PORT || appConfig.port;
  const app = await NestFactory.create(AppModule, {
    cors: true,
    bodyParser: true,
  });
  app.useLogger(mainLogger);

  const swaggerConfig = new DocumentBuilder()
    .setTitle('compound-rewards-V2-api')
    .addServer(process.env.SWAGGER_HOST)
    .setVersion('0.0.0')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('/docs', app, document);

  const logger: Logger = mainLogger.child({ scope: 'main.ts' });
  await app.listen(APP_PORT);
  logger.info(`Server is up on port ${appConfig.port}`, {
    function: 'start()',
  });
}

start();
