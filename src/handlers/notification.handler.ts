import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class NotificationHandler {
  private logger = new Logger(NotificationHandler.name);

  handlePayment(event: any) {
    this.logger.log(
      `💳 Pagamento ${event.status} para pedido ${event.orderId}`,
    );
  }

  handleStockReserved(event: any) {
    this.logger.log(`📦 Estoque reservado para pedido ${event.orderId}`);
  }

  handleStockFailed(event: any) {
    this.logger.log(`❌ Falha de estoque: ${event.reason}`);
  }
}
