import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { PaymentProcessedEvent } from 'src/dto/payment.dto';
import { StockFailedEvent, StockReservedEvent } from 'src/dto/stock.dto';
import { NotificationHandler } from 'src/handlers/notification.handler';

@Controller()
export class NotificationConsumer {
  constructor(private readonly handler: NotificationHandler) {}

  @EventPattern('payment.processed')
  handlePayment(@Payload() event: PaymentProcessedEvent) {
    this.handler.handlePayment(event);
  }

  @EventPattern('stock.reserved')
  handleStockReserved(@Payload() event: StockReservedEvent) {
    this.handler.handleStockReserved(event);
  }

  @EventPattern('stock.failed')
  handleStockFailed(@Payload() event: StockFailedEvent) {
    this.handler.handleStockFailed(event);
  }
}
