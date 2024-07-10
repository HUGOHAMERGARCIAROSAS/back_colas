import { Router } from 'express';
import { AuthRoutes } from './auth/routes';
import { PersonRoutes } from './person/routes';


export class AppRoutes {
    static get routes(): Router {

        const router = Router();
        
        // PERSON ROUTES
        router.use('/api/person',PersonRoutes.routes);

        // AUTH ROUTES
        router.use('/api/auth',AuthRoutes.routes);

        return router;

    }
}