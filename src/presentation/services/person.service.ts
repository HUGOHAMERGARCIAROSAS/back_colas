import { RegisterPersonDto, CustomError, PersonEntity } from '../../domain';
import {  PersonModel, UserModel } from "../../data";


export class PersonService {
    
    constructor() {
     }

    public async  registerPerson( RegisterPersonDto : RegisterPersonDto ) {

        
        const existPerson = await PersonModel.findOne({ where: { document: RegisterPersonDto.document } } );

        if(existPerson) throw CustomError.badRequest('Ya existe una persona con este documento');
        console.log(existPerson);
        try{
            const person = await PersonModel.create({ ...RegisterPersonDto  });
            const personEntity = PersonEntity.fromObject(person);
            return personEntity;

        }catch(err){
            throw CustomError.internalServerError(`${err}`);
        }
    }

    public async  getPersons() {
        try{
            const persons = await PersonModel.findAll({
                order: [['person_id', 'DESC']],
                where: { status: 1 },
                include: [
                    { 
                        model: UserModel,
                        required: false,
                        where: { status: 1 },
                        attributes: ['person_id', 'username', 'email'] 
                    }
                ]
            });
            return persons;
        }catch(err){
            throw CustomError.internalServerError(`${err}`);
        }
    }
}