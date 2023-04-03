import { Injectable } from "@nestjs/common";
import * as pJson from "../../package.json";

const startedAt: Date = new Date();
const started: number = startedAt.getTime();

@Injectable()
export class HealthService {
  getHealthInfo() {
    return {
      version: pJson.version,
      since: startedAt,
      uptime: Date.now() - started,
    };
  }
}
