import { Response, Request } from "express";
import { getUsers } from "../../data/sql/user.model";
export class AuthController {

    constructor () {
    }   

    registerUser = (req: Request, res: Response) => {
        res.json('registerUser');
    }

    loginUser = async (req: Request, res: Response) => {
        const users = await getUsers();
        res.json({
            users,
            message: 'loginUser'
        });
    }

    validateEmail = (req: Request, res: Response) => {
        res.json('validateEmail');
    }

}