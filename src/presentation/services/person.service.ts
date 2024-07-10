import { RegisterPersonDto } from '../../domain/dtos/person/register-user.dto';
import {  PersonModel } from "../../data/sql/persona.model";
import { CustomError } from '../../domain';


export class PersonService {


    constructor() { }

    public async  registerPerson( RegisterPersonDto : RegisterPersonDto ) {
        const existPerson = await PersonModel.findOne({ where: { documento: RegisterPersonDto.documento } });
        if(existPerson) throw CustomError.badRequest('Ya existe una persona con este documento');

        try{
            const person = await PersonModel.create({ ...RegisterPersonDto });
            console.log(person)
        }catch(err){
            throw CustomError.internalServerError(`${err}`);
        }
    }
}