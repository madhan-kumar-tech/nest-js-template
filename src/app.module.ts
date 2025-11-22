import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { validationSchema } from './config/validation';
import { InfrastructureDatabaseModule } from './infrastructure/database/database.module';
import { LoggerModule } from './logging/logger.module';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { HealthModule } from './modules/health/health.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      validationSchema,
      envFilePath: '.env'
    }),
    InfrastructureDatabaseModule,
    LoggerModule,
    AuthModule,
    UsersModule,
    HealthModule,
  ],
})
export class AppModule {}
