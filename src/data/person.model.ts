import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config";
import { UserModel } from "./user.model";

class Person extends Model {
    public person_id!: number;
    public lastname!: string;
    public mother_lastname!: string;
    public firstname!: string;
    public document_type!: number;
    public document!: string;
    public birthdate!: string;
    public address!: string;
    public phone!: string;
    public status!: boolean;
    public created_user !: number;
    public created_date !: Date;
    public updated_user !: number;
    public updated_date !: Date;
}

Person.init(
    {
        person_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        mother_lastname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        firstname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        document_type: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        document: {
            type: DataTypes.STRING,
            allowNull: false
        },
        birthdate: {
            type: DataTypes.DATE,
            allowNull: true
        },
        address: {
            type: DataTypes.STRING,
            allowNull: true
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: true
        },
        status: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        created_user: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        created_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        updated_user: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        updated_date: {
            type: DataTypes.DATE,
            allowNull: true
        },

    },
    {
        modelName: 'PersonModel',
        tableName: 'person',
        timestamps: false,
        sequelize
    }
)

export { Person as PersonModel }



// async function testConnection() {
//   try {
//     await sequelize.authenticate();
//     console.log('Conexión establecida correctamente.');
//   } catch (error) {
//     console.error('No se pudo conectar a la base de datos:', error);
//   } finally {
//     await sequelize.close();
//   }
// }

// testConnection();