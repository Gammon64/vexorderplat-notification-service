import { Module } from '@nestjs/common';
import { NotificationConsumer } from './consumers/notification.consumer';
import { NotificationHandler } from './handlers/notification.handler';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [NotificationConsumer],
  providers: [NotificationHandler],
})
export class AppModule {}
