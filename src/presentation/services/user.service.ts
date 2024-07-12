// import { Op } from "sequelize";
import { RegisterUserDto, CustomError, UserEntity } from '../../domain';
import {  UserModel } from "../../data";


export class UserService {
    
    constructor() {
     }

    public async  registerUser( RegisterUserDto : RegisterUserDto ) {

        
        const existUser = await UserModel.findOne({ where: {   email: RegisterUserDto.email }} );

        if(existUser) throw CustomError.badRequest('Ya existe una persona con este documento y/o email');
        try{
            const user = await UserModel.create({ ...RegisterUserDto  });
            const userEntity = UserEntity.fromObject(user);
            return userEntity;

        }catch(err){
            throw CustomError.internalServerError(`${err}`);
        }
    }
}