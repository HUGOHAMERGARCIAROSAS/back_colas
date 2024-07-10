import { Router } from 'express';
import { PersonController } from './controller';
import { PersonService } from '../services/person.service';


export class PersonRoutes {
    static get routes(): Router {

        const router = Router();
        const personService = new PersonService();
        const controller = new PersonController(personService);

        // definir rutas
        router.post('/register', controller.registerPerson);

        return router;
    }
}