import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway(3001, {
  cors: {
    origin: '*',
  },
})
export class NotificationGateway {
  @WebSocketServer()
  server!: Server;

  emit(event: string, payload: any) {
    this.server.emit(event, payload);
  }
}
