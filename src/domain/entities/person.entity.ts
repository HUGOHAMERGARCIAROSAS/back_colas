import { CustomError } from "../errors/custom.error";

export class PersonEntity {

    constructor(
        public readonly person_id: number,
        public readonly lastname: string,
        public readonly mother_lastname: string,
        public readonly firstname: string,
        public readonly document_type: number,
        public readonly document: string,
        public readonly birthdate: string,
        public readonly address: string,
        public readonly phone: string,
        public readonly status: boolean,
        public readonly created_user: number,
        public readonly created_date: Date,
        public readonly updated_user: number,
        public readonly updated_date: Date
    ) { }


    static fromObject(object: { [key: string]: any }) {

        const { person_id, lastname, mother_lastname, firstname, document_type, document, birthdate, address, phone, status, created_user, created_date, updated_user, updated_date } = object;

        if (!person_id) throw CustomError.badRequest('falta el id');
        if (!lastname) throw CustomError.badRequest('falta el apellido');
        if (!mother_lastname) throw CustomError.badRequest('falta el apellido materno');
        if (!firstname) throw CustomError.badRequest('falta el nombre');
        if (!status) throw CustomError.badRequest('falta el status');
        if (!created_user) throw CustomError.badRequest('falta el created_user');
        if (!created_date) throw CustomError.badRequest('falta el created_date');
        
        return new PersonEntity(person_id, lastname, mother_lastname, firstname, document_type, document, birthdate, address, phone, status, created_user, created_date, updated_user, updated_date);
    }
}