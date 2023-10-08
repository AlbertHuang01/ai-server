import {join} from 'path';

export default {
    type: 'mysql',
    host: 'db4free.net',
    port: 3306,
    username: 'vsdfdsf',
    password: 'wFDfaWI8VSBWu5pH',
    database: 'ai_server',
    entities: [join(__dirname, '../', '**/**.entity{.ts,.js}')],
    synchronize: true,
    retryAttempts: 10,
};
