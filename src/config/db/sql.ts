import sql from 'mssql';
import { envs } from '../envs';

const config: sql.config = {
    user: envs.DB_USER,
    password: envs.DB_PASS,
    server: envs.DB_SERVER,
    database: envs.DB_DATABASE,
    port: envs.DB_PORT,
    options: {
        encrypt: false
    }
}


const poolPromise = new sql.ConnectionPool(config)
    .connect()
    .then(pool => {
        console.log('conectado');
        return pool;
    })
    .catch(err => {
        console.log('no conectado');
        console.log(err);
        throw err;
    });

export { sql, poolPromise };
