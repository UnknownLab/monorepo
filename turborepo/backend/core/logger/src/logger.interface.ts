export interface ILogger{
  info(message: string): Promise<void>;
  debug(message: string): Promise<void>;
}

export const ILogger = Symbol('logger');