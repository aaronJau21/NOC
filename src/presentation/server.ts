import { CheckService } from "../domain/use-cases/checks/check-service";
import { CronService } from "./cron/cron-services";

export class Server {
  public static start() {
    CronService.createJob("*/5 * * * * *", () => {
      new CheckService(
        () => console.log("Success"),
        (error: string) => console.log(error)
      ).execute("https://www.youtube.com/");
    });
  }
}
