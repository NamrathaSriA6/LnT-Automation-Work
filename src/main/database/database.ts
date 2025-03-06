import * as sql from 'mssql';

let pool: sql.ConnectionPool;

export async function getDatabaseConnection(databaseType: string): Promise<sql.Request> {
    let config: sql.config;

    switch (databaseType) {
        case 'ALM':
            config = {
                user: 'ALM4LOGIN',
                password: 'QA@Adm#Alm4',
                server: '172.31.61.105',
                database: 'EIP40ALM',
                options: {
                    encrypt: true,
                    trustServerCertificate: true,
                },
            };
            break;

        case 'AWM':
            config = {
                user: 'AWM4LOGIN',
                password: 'AWM4LOGIN@@qa',
                server: '172.31.61.105',
                database: 'EIP40AWM',
                options: {
                    encrypt: true,
                    trustServerCertificate: true,
                },
            };
            break;

        case 'EPM':
            config = {
                user: 'EPM4LOGIN',
                password: 'EPm#Login1!Qa',
                server: '172.31.61.105',
                database: 'EIP40EPM',
                options: {
                    encrypt: true,
                    trustServerCertificate: true,
                },
            };
            break;

        case 'SCM':
            config = {
                user: 'SCM4login',
                password: 'SCM4LOGIN@@qa',
                server: '172.31.61.105',
                database: 'EIP40SCM',
                options: {
                    encrypt: true,
                    trustServerCertificate: true,
                },
            };

            case 'All':
            config = {
                user: 'EDMS4LOGIN',
                password: 'LogiN#qa!EDM',
                server: '172.31.61.105',
                database: 'EIP40SCM',
                options: {
                    encrypt: true,
                    trustServerCertificate: true,
                },
            };
            break;

        default:
            throw new Error(`Unsupported database type: ${databaseType}`);
    }

    pool = await new sql.ConnectionPool(config).connect();
    return pool.request();
}

export async function executeQuery(databaseType: string, query: string): Promise<any> {
    try {
        const request = await getDatabaseConnection(databaseType);
        const result = await request.query(query);
        return result;
    } catch (e) {
        throw new Error(`Error executing query: ${e}`);
    }
}
