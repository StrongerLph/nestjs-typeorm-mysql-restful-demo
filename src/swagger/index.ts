import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export function swaggerStart(app) {
  const config = new DocumentBuilder()
    .setTitle('nest_prisma_ts_swagger_rest_api_demo')
    .setDescription('这是一个基于nest、prisma的服务端的接口文档')
    .setVersion('0.1')
    .addBearerAuth() /* 启用认证 */
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
}
