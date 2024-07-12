import { Response, Request } from "express";
import { RegisterPersonDto, CustomError } from "../../domain";
import { PersonService } from "../services";

export class PersonController {

    constructor(public readonly personService: PersonService) {
    }

    private handleError = (error: unknown, res: Response) => {
        if (error instanceof CustomError) {
            return res.status(error.statusCode).json({ error: error.message });
        }

        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }

    getPersons = (req: Request, res: Response) => {
        this.personService.getPersons().then((persons) => res.json(persons)).catch(error => this.handleError(error, res));
    }

    registerPerson = (req: Request, res: Response) => {
        const { person_id, lastname, mother_lastname, firstname, document_type, document, birthdate, address, phone, status, created_user, created_date, updated_user, updated_date } = req.body;
        const [error, registerDto] = RegisterPersonDto.create({ person_id, lastname, mother_lastname, firstname, document_type, document, birthdate, address, phone, status, created_user, created_date, updated_user, updated_date });
        if (error) return res.status(400).json({ error });
        this.personService.registerPerson(registerDto!).then((registerDto) => res.json(registerDto)).catch(error => this.handleError(error, res));
    }

}