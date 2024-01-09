// import { CheckService } from "../domain/use-cases/checks/check-service";
// import { FileSystemDataSource } from "../infrastructure/datasources/file-system.datasources";
// import { LogRepositoryImpl } from "../infrastructure/repositories/log-impl.repository";
// import { CronService } from "./cron/cron-services";

import { envs } from "../config/plugins/envs.plugins";
// import { EmailService } from "./email/email.service";

// const fileSystemLogRepository = new LogRepositoryImpl(
//   new FileSystemDataSource()
// );

export class Server {
  public static start() {
    // const emailService = new EmailService();
    // emailService.sendEmail({
    //   to: "aaronjaureguisifuentes@gmail.com",
    //   subject: "Logs de Sistema",
    //   htmlBody: `
      
    //   <h3>Logs de sistema - NOC</h3>
    //   <p>Hola Mundo</p>
      
    //   `,
    // });

    // CronService.createJob("*/5 * * * * *", () => {
    //   new CheckService(
    //     fileSystemLogRepository,
    //     () => console.log("Success"),
    //     (error: string) => console.log(error)
    //   ).execute("https://www.youtube.com/");
    // });

    console.log(envs.MAILER_SECRET_KEY, envs.MAILER_EMAIL);
  }
}
