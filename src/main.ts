import { NestFactory } from '@nestjs/core';
import { swaggerStart } from './swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 启动swagger
  swaggerStart(app);

  await app.listen(3000);
}
bootstrap();
