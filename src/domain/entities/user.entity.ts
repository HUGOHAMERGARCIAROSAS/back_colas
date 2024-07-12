import { CustomError } from "../errors/custom.error";

export class UserEntity {

    constructor(
        public readonly person_id: number,
        public readonly username: string,
        public readonly password: string,
        public readonly email: string,
        public readonly status: boolean,
        public readonly created_user: number,
        public readonly created_date: Date,
        public readonly updated_user: number,
        public readonly updated_date: Date
    ) { }


    static fromObject(object: { [key: string]: any }) {

        const { person_id, username, password, email, status, created_user, created_date, updated_user, updated_date } = object;

        if (!person_id) throw CustomError.badRequest('falta el id');
        if (!username) throw CustomError.badRequest('falta el username');
        if (!password) throw CustomError.badRequest('falta el password');
        if (!email) throw CustomError.badRequest('falta el email');
        if (!status) throw CustomError.badRequest('falta el status');
        if (!created_user) throw CustomError.badRequest('falta el created_user');
        if (!created_date) throw CustomError.badRequest('falta el created_date');

        return new UserEntity(person_id, username, password, email, status, created_user, created_date, updated_user, updated_date);

    }
}