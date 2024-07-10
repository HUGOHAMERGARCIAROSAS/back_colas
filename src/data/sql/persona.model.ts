import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../config/db/sql";

class Person extends Model {
    public persona_ID!: string;
    public paterno!: string;
    public materno!: string;
    public nombres!: string;
    public documento!: string;
    public registro_user!: string;
    public registro_fecha!: Date;
}

Person.init(
    {
        persona_ID: {
            type: DataTypes.STRING(11),
            primaryKey: true,
            allowNull: false
        },
        paterno: {
            type: DataTypes.STRING,
            allowNull: false
        },
        materno: {
            type: DataTypes.STRING,
            allowNull: false
        },
        nombres: {
            type: DataTypes.STRING,
            allowNull: false
        },
        documento: {
            type: DataTypes.STRING,
            allowNull: false
        },
        registro_user: {
            type: DataTypes.STRING,
            allowNull: false
        },
        registro_fecha: {
            type: DataTypes.DATE,
            allowNull: false
        },
        estado: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    },
    {
        modelName: 'PersonModel',
        tableName: 'persona',
        timestamps: false,
        sequelize
    }
)

export { Person as PersonModel }