import { Injectable } from '@nestjs/common';
import { consola, createConsola } from "consola";
import {ILogger} from "./logger.interface";

@Injectable()
export class LoggerService implements ILogger{

  async info(message: string){

    consola.info(`Log: ${message}`);

  }

  async debug(message: string): Promise<void> {
    this.info(message);
    await consola.prompt("Go next?", {
      type: "confirm",
    });
  }

}
