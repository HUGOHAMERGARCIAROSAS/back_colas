import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config";
import { PersonModel } from "./person.model";

class User extends Model {
    person_id!: number;
    username!: string;
    email!: string;
    password!: string;
    status!: boolean;
    created_user !: number;
    created_date !: Date;
    updated_user !: number;
    updated_date !: Date;
}

User.init(
    {
        person_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
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
        }
    },
    {
        modelName: 'User',
        tableName: 'user',
        timestamps: false,
        sequelize
    }
);

User.belongsTo(PersonModel, { foreignKey: 'person_id' });
PersonModel.hasOne(User, { foreignKey: 'person_id' });

// User.sync({ alter: true });

// PersonModel.belongsTo(User, { foreignKey: 'person_id' });

export { User as UserModel };