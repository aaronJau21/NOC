import { CronService } from "./cron/cron-services";

export class Server {
  public static start() {
    CronService.createJob();
  }
}
