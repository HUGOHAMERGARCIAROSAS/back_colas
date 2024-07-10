export class RegisterPersonDto {

    private constructor(
        public persona_ID: string,
        public paterno: string,
        public materno: string,
        public nombres: string,
        public documento: string,
        public registro_user: string,
        public registro_fecha: Date,
        public estado: boolean
    ) { }

    static create( object : { [key:string]:any } ) : [string?, RegisterPersonDto?] {
        const { persona_ID, paterno, materno, nombres, documento, registro_user, registro_fecha, estado } = object;

        if(!persona_ID) return ['falta el id'];
        if(!paterno) return ['falta el paterno'];
        if(!materno) return ['falta el materno'];
        if(!nombres) return ['falta el nombres'];
        if(!documento) return ['falta el documento'];
        if(!registro_user) return ['falta el registro_user'];
        if(!registro_fecha) return ['falta el registro_fecha'];
        if(!estado) return ['falta el estado'];
        return [undefined, new RegisterPersonDto(persona_ID, paterno, materno, nombres, documento, registro_user, registro_fecha, estado)];

    }
}