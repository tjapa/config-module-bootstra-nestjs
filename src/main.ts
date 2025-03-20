import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  console.log('BOOTSTRAP STARTED');
  process.env.test = 'TESTTTTTTTTTTTTTTTTTTTTTTTT';
  console.log('BOOTSTRAP process.env.test', process.env.test);
  console.log('BOOTSTRAP CREATING APP');
  const app = await NestFactory.create(AppModule);
  console.log('BOOTSTRAP CREATING APP DONE');
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
