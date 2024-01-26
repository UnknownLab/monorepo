import { Module } from '@nestjs/common';
import { LoggerService } from './logger.service';
import {ILogger} from "./logger.interface";

const LoggerProvider = {
  provide: ILogger,
  useClass: LoggerService
}

@Module({
  providers: [LoggerProvider],
  exports: [LoggerProvider],
})
export class LoggerModule {}
