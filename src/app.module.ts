import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { NotificationConsumer } from './consumers/notification.consumer';
import { NotificationGateway } from './gateway/notification.gateway';
import { NotificationHandler } from './handlers/notification.handler';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [NotificationConsumer],
  providers: [NotificationHandler, NotificationGateway],
})
export class AppModule {}
