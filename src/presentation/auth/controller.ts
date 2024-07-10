import { Response, Request } from "express";
import { sequelize, QueryTypes } from '../../config/db/sql';

export class AuthController {

    constructor() {
    }

    registerUser = (req: Request, res: Response) => {
        res.json('registerUser');
    }

    loginUser = async (req: Request, res: Response) => {
        let tipo: number = 1;
        let login: string = 'hgarciar';
        const users = await sequelize.query('exec sp_usuario @tipo=:tipo, @login=:login', {
            replacements: {
                tipo, login
            },
            type: QueryTypes.SELECT
        });

        res.json({
            users,
            message: 'loginUser'
        });
    }

    validateEmail = (req: Request, res: Response) => {
        res.json('validateEmail');
    }

}