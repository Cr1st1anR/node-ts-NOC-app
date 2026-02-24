import { FileSystemDatasource } from "../infrastructure/datasources/file-system.datasource";
import { EmailService } from "./email/email.service";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { CheckService } from "../domain/use-cases/checks/check-service";
import { CronService } from "./cron/cron-service";
import { MongoLogDatasource } from "../infrastructure/datasources/mongo-log.datasource";
import { LogSeverityLevel } from "../domain/entities/log.entity";


const logRepository = new LogRepositoryImpl(
    // new FileSystemDatasource()
    new MongoLogDatasource(),
);
const emailService = new EmailService();


export class Server {

    public static async start() {

        console.log('Server started...');

        //todo: Mandar email
        // new SendEmailLogs(
        //     emailService,
        //     fileSystemLogRepository,
        // ).execute(
        //     'c.rengifo860@gmail.com'
        // )

        // emailService.sendEmailWithFileSystemLogs(
        //     'c.rengifo860@gmail.com'
        // );




        // sendEmail({
        //             to: 'c.rengifo860@gmail.com',
        //             subject: 'Logs de sistema',
        //             htmlBody: `
        //              <h3>Logs de sistema - NOC</h3>
        //              <P>Por muy larga que sea la tormenta, el sol siempre vuelve a brillar</P>
        //              <P>Ver logs adjuntos</P>
        //             `
        //         })

        const logs = await logRepository.getLogs(LogSeverityLevel.low);
        console.log(logs);

        // CronService.createJob(
        //     '*/5 * * * * *',
        //     () => {
        //         const url = 'https://google.com';

        //         new CheckService(
        //             logRepository,
        //             () => console.log(`${url} is ok`),
        //             (error) => console.log(error),
        //         ).execute(url);
        //     }
        // );


    }
}