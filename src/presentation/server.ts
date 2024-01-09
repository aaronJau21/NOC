// import { CheckService } from "../domain/use-cases/checks/check-service";
// import { FileSystemDataSource } from "../infrastructure/datasources/file-system.datasources";
// import { LogRepositoryImpl } from "../infrastructure/repositories/log-impl.repository";
// import { CronService } from "./cron/cron-services";

// import { EmailService } from "./email/email.service";

// // import { envs } from "../config/plugins/envs.plugins";
// // import { EmailService } from "./email/email.service";

// const fileSystemLogRepository = new LogRepositoryImpl(
//   new FileSystemDataSource()
// );

export class Server {
  public static start() {
    console.log("Server Started...");

    // const emailService = new EmailService(fileSystemLogRepository);
    // emailService.sendEmailWithFileSystemLogs([
    //   "aaronjau21@gmail.com",
    //   "aaronjaureguisifuentes@gmail.com",
    // ]);

    //   CronService.createJob("*/5 * * * * *", () => {
    //     new CheckService(
    //       fileSystemLogRepository,
    //       () => console.log("Success"),
    //       (error: string) => console.log(error)
    //     ).execute("https://www.youtube.com/");
    //   });
  }
}
