import {join} from 'path';

export default {
    type: 'mysql',
    host: 'localhost',
    port: 49153,
    username: 'root',
    password: 'wFDfaWI8VSBWu5pH',
    database: 'ai-server',
    entities: [join(__dirname, '../', '**/**.entity{.ts,.js}')],
    synchronize: true,
};
