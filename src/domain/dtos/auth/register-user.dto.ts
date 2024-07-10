export class RegisterUserDto {

    private constructor(
        public readonly per_codigo: string,
        public readonly per_login: string,
        public readonly password: string
    ) { }

    static create( object : { [key:string]:any } ) : [string?, RegisterUserDto?] {
        const { per_codigo, per_login, password } = object;

        if(!per_codigo) return ['falta el id'];
        if(!per_login) return ['falta el login'];
        if(!password) return ['falta el password'];
        return [undefined, new RegisterUserDto(per_codigo, per_login, password)];

    }
}