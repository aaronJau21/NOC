import { CronJob } from "cron";

export class CronService {
  static createJob(): CronJob {
    const job = new CronJob(
      "*/3 * * * * *", // cronTime
      function () {
        const date = new Date();
        console.log(date);
      }
    );
    job.start();

    return job;
  }
}
