export class RegisterPersonDto {

    private constructor(
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

    static create(object: { [key: string]: any }): [string?, RegisterPersonDto?] {
        const { person_id, lastname, mother_lastname, firstname, document_type, document, birthdate, address, phone, status, created_user, created_date, updated_user, updated_date } = object;
        if (!lastname) return ['falta el apellido'];
        if (!mother_lastname) return ['falta el apellido materno'];
        if (!firstname) return ['falta el nombre'];
        if (!phone) return ['falta el teléfono'];
        if (!status) return ['falta el status'];
        if (!created_user) return ['falta el created_user'];
        if (!created_date) return ['falta el created_date'];

        return [undefined, new RegisterPersonDto(person_id, lastname, mother_lastname, firstname, document_type, document, birthdate, address, phone, status, created_user, created_date, updated_user, updated_date)];

    }
}