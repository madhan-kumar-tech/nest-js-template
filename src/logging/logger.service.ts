import { Injectable, LoggerService as NestLoggerService, LogLevel } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class LoggerService implements NestLoggerService {
  private readonly logLevel: LogLevel;

  constructor(private readonly config: ConfigService) {
    this.logLevel = config.get<LogLevel>('logLevel') || 'debug';
  }

  log(message: string) {
    if (['log', 'debug'].includes(this.logLevel)) console.log(message);
  }
  error(message: string, trace?: string) {
    if (['error', 'debug'].includes(this.logLevel)) console.error(message, trace);
  }
  warn(message: string) {
    if (['warn', 'debug'].includes(this.logLevel)) console.warn(message);
  }
  debug(message: string) {
    if (this.logLevel === 'debug') console.debug(message);
  }
}
