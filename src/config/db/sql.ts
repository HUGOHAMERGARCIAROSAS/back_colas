import { Sequelize, Dialect, QueryTypes } from 'sequelize';
import { envs } from '../envs';

const sequelize = new Sequelize(envs.DB_DATABASE, envs.DB_USER, envs.DB_PASS, {
  host: envs.DB_SERVER,
  dialect: envs.DIALECT as Dialect,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  // logging: console.log,
});


export { sequelize, QueryTypes };


