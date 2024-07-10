import { CustomError } from "../errors/custom.error";

export class UserEntity {

    constructor(
        public readonly per_codigo: string,
        public readonly per_login: string,
        public readonly password: string    
    ){}


    static fromObject(object: { [key:string]:any }) {

       const { per_codigo, per_login, password } = object;

       if(!per_codigo) throw CustomError.badRequest('falta el id');
       if(!per_login) throw CustomError.badRequest('falta el login');
       if(!password) throw CustomError.badRequest('falta el password');
       
       return new UserEntity(per_codigo, per_login, password);

    }
}