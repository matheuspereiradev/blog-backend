import { join } from "path";
import { DataSource } from "typeorm";


export default new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '1234',
    database: 'db_blog',
    entities: [
        join(__dirname, 'src', 'infra', 'database', 'typeorm', '**', '*.entity.{ts,js}')
    ],
    migrations: [
        join(__dirname, 'src', 'infra', 'database', 'typeorm', 'migrations', '*.{ts,js}')
    ]
});

 