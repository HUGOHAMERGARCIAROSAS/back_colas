import { Response, Request } from "express";
import { sequelize, QueryTypes } from '../../config/db/sql';
import { RegisterPersonDto } from "../../domain/dtos/person/register-user.dto";
import { PersonService } from "../services/person.service";

export class PersonController {

    constructor(public readonly personService: PersonService) {
    }

    registerPerson = (req: Request, res: Response) => {
        const { persona_ID, paterno, materno, nombres, documento, registro_user, registro_fecha, estado } = req.body;
        
        const [error, registerDto] = RegisterPersonDto.create({persona_ID, paterno, materno, nombres, documento, registro_user, registro_fecha, estado});
        if(error) return res.status(400).json({error});
        
        this.personService.registerPerson(registerDto!).then((registerDto) => res.json(registerDto)).catch(error => res.status(400).json({error}));
    }

}