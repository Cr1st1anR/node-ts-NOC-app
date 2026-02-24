import { LogDatasource } from "../../domain/datasources/log.datasource";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";
import { LogRepository } from "../../domain/repository/log.repository";




export class LogRepositoryImpl implements LogRepository {

    constructor( //recibir algun tipo de datasource
        private readonly logDatasource: LogDatasource, //cambiar este datasource siempre y cuanto tenga los metodos implementados
    ) {}

    async saveLog(log: LogEntity): Promise<void> { //llamar los metodos del datasource
        return this.logDatasource.saveLog(log);
    }

    async getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
        return this.logDatasource.getLogs(severityLevel)
    }

}