import { FileSystemDatasource } from "../infrastructure/datasources/file-system.datasource";
import { EmailService } from "./email/email.service";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { CronService } from "./cron/cron-service";
import { MongoLogDatasource } from "../infrastructure/datasources/mongo-log.datasource";
import { PostgresLogDataSource } from "../infrastructure/datasources/postgres-log.datasource";
import { CheckServiceMultiple } from "../domain/use-cases/checks/check-service-multiple";


const fsLogRepository = new LogRepositoryImpl(
    new FileSystemDatasource()
);
const mongoLogRepository = new LogRepositoryImpl(
    new MongoLogDatasource()
);
const postgresLogRepository = new LogRepositoryImpl(
    new PostgresLogDataSource()
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

        // const logs = await logRepository.getLogs(LogSeverityLevel.low);
        // console.log(logs);

        // CronService.createJob(
        //     '*/5 * * * * *',
        //     () => {
        //         const url = 'https://google.com';

        //         new CheckServiceMultiple(
        //             [fsLogRepository, mongoLogRepository, postgresLogRepository],
        //             () => console.log(`${url} is ok`),
        //             (error) => console.log(error),
        //         ).execute(url);
        //     }
        // );
    

    }
}