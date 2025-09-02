import { DataSource } from "typeorm";

export default new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: 'postgres',
    password: 'Union2017',
    database: 'backend_nest_inventarios',
    entities: ['src/**/*.entity.ts'],
    migrations: ['src/database/migrations/*.ts'],     
});