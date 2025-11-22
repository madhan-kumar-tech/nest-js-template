import { Controller, Get } from '@nestjs/common';
import { Connection } from 'typeorm';
import { ConfigService } from '@nestjs/config';

@Controller('health')
export class HealthController {
  constructor(
    private readonly connection: Connection,
    private readonly config: ConfigService,
  ) {}

  @Get()
  async health() {
    const dbStatus = this.connection.isConnected;
    const version = this.config.get<string>('version') || '1.0.0';
    return {
      status: 'ok',
      db: dbStatus ? 'up' : 'down',
      version,
    };
  }
}
