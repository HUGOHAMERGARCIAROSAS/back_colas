import { Response, Request } from "express";
import { RegisterUserDto, CustomError } from "../../domain";
import { UserService } from "../services";
export class AuthController {

    constructor(public readonly userService: UserService) {
    }

    private handleError = (error: unknown, res: Response) => {
        if (error instanceof CustomError) {
            return res.status(error.statusCode).json({ error: error.message });
        }
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }

    registerUser = (req: Request, res: Response) => {
        const { person_id, username, password, email, status, created_user, created_date, updated_user, updated_date } = req.body;
        const [error, registerDto] = RegisterUserDto.create({ person_id, username, password, email, status, created_user, created_date, updated_user, updated_date });
        if (error) return res.status(400).json({ error });

        this.userService.registerUser(registerDto!).then((registerDto) => res.json(registerDto)).catch(error => this.handleError(error, res));
    }

    loginUser = async (req: Request, res: Response) => {
    }

    validateEmail = (req: Request, res: Response) => {
        res.json('validateEmail');
    }

}