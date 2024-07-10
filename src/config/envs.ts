import 'dotenv/config';
import { get } from 'env-var';

export const envs = {
    PORT: get('PORT').required().asInt(),
    DB_USER: get('DB_USER').required().asString(),
    DB_PASS: get('DB_PASS').required().asString(),
    DB_SERVER: get('DB_SERVER').required().asString(),
    DB_DATABASE: get('DB_DATABASE').required().asString(),
    DB_PORT: get('DB_PORT').required().asInt(),
    DIALECT: get('DIALECT').required().asString(),
}


