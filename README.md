## 📋 Notification Service

**Serviço de Notificação** é um microsserviço construído com NestJS que processa mensagens de pagamento e estoque através do Kafka e distribui notificações em tempo real via WebSockets.

### 🏗️ Arquitetura

- **NestJS 11** - Framework Node.js moderno
- **Kafka** - Message broker para consumir eventos
- **WebSockets (Socket.io)** - Comunicação em tempo real com clientes
- **DTOs** - Objetos de transferência de dados tipados
- **Handlers & Consumers** - Lógica de processamento de mensagens

### 🚀 Comandos Disponíveis

```bash
npm run start         # Iniciar serviço
npm run start:dev     # Modo desenvolvimento (watch)
npm run build         # Build para produção
npm run lint          # Verificar e corrigir linting
npm run test          # Executar testes
npm run test:e2e      # Testes end-to-end
```

### 📦 Dependências Principais

- `@nestjs/*` - Framework NestJS
- `kafkajs` - Cliente Kafka
- `socket.io` - WebSockets
- `dotenv` - Variáveis de ambiente

### 🐳 Docker

O projeto inclui um Dockerfile para containerização.
