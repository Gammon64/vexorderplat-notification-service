import { Injectable, Logger } from '@nestjs/common';
import { NotificationGateway } from 'src/gateway/notification.gateway';

@Injectable()
export class NotificationHandler {
  private logger = new Logger(NotificationHandler.name);

  constructor(private readonly gateway: NotificationGateway) {}

  handlePayment(event: any) {
    this.logger.log(
      `💳 Pagamento ${event.status} para pedido ${event.orderId}`,
    );

    this.gateway.emit('payment_processed', event);
  }

  handleStockReserved(event: any) {
    this.logger.log(`📦 Estoque reservado para pedido ${event.orderId}`);
    this.gateway.emit('stock_reserved', event);
  }

  handleStockFailed(event: any) {
    this.logger.log(`❌ Falha de estoque: ${event.reason}`);
    this.gateway.emit('stock_failed', event);
  }
}
