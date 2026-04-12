export class StockReservedEvent {
  constructor(orderId: string, status: string, processedAt: string) {}
}

export class StockFailedEvent {
  constructor(orderId: string, reason: string, processedAt: string) {}
}
