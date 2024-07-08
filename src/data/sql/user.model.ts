import { poolPromise  } from "../../config/db/sql";

interface User {
    per_codigo: number;
    per_login: string;
    per_password: string;
}

const getUsers = async (): Promise<User[]> => {
    const pool = await poolPromise;
    const result = await pool
        .request()
        .query("SELECT * FROM USUARIO");
    return result.recordset;
};



export { getUsers }