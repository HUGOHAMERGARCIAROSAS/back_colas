export class RegisterUserDto {

    private constructor(
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

    static create(object: { [key: string]: any }): [string?, RegisterUserDto?] {
        const { person_id, username, password, email, status, created_user, created_date, updated_user, updated_date } = object;
        if (!person_id) return ['falta el id'];
        if (!username) return ['falta el login'];
        if (!password) return ['falta el password'];
        if (!email) return ['falta el email'];
        if (!status) return ['falta el status'];
        if (!created_user) return ['falta el created_user'];
        if (!created_date) return ['falta el created_date'];
        return [undefined, new RegisterUserDto(person_id, username, password, email, status, created_user, created_date, updated_user, updated_date)];

    }
}