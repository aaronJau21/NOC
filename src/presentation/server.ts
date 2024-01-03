import { CheckService } from "../domain/use-cases/checks/check-service";
import { FileSystemDataSource } from "../infrastructure/datasources/file-system.datasources";
import { LogRepositoryImpl } from "../infrastructure/repositories/log-impl.repository";
import { CronService } from "./cron/cron-services";

const fileSystemLogRepository = new LogRepositoryImpl(
  new FileSystemDataSource()
);

export class Server {
  public static start() {
    CronService.createJob("*/5 * * * * *", () => {
      new CheckService(
        fileSystemLogRepository,
        () => console.log("Success"),
        (error: string) => console.log(error)
      ).execute("https://www.youtube.com/");
    });
  }
}
