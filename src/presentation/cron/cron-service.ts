import { CronJob } from 'cron';

type CronTime = string | Date;
type OnTick = () => void;


//Patron adaptador que adapta nuestro paquete de terceros (cron)
export class CronService {
    
    static createJob(cronTime: CronTime, onTick: OnTick): CronJob {

        const job = new CronJob(cronTime, onTick);
                
                job.start() ;

                return job;
    }
}