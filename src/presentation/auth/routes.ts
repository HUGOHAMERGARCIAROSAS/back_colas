import { Router } from 'express';
import { AuthController } from './controller';
import { UserService } from '../services';


export class AuthRoutes {
    static get routes(): Router {

        const router = Router();
        const userService = new UserService();
        const controller = new AuthController(userService);

        // definir rutas
        router.post('/login', controller.loginUser);
        router.post('/register', controller.registerUser);
        router.get('/validate-email/:token', controller.validateEmail);

        return router;
    }
}
