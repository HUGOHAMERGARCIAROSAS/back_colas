import { Sequelize, Dialect, QueryTypes } from 'sequelize';
import { envs } from '../envs';

const sequelize = new Sequelize(envs.DB_DATABASE, envs.DB_USER, envs.DB_PASS, {
  host: envs.DB_SERVER,
  dialect: envs.DIALECT as Dialect,
  dialectOptions: {
    options: {
      encrypt: true
    }
  }
});


export { sequelize, QueryTypes };


