import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../config/db/sql";

class User extends Model {
    per_codigo!: number;
    per_login!: string;
    password!: string;
}

User.init(
    {
        per_codigo: {
            type: DataTypes.STRING(11),
            primaryKey: true
        },
        per_login: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        }
    },
    {
        modelName: 'User',
        tableName: 'usuario',
        timestamps: false,
        sequelize
    }
);

export { User as UserModel };