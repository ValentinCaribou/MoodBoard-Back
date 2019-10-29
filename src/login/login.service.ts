import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import { Model } from 'mongoose';
import {User} from "../interfaces/user.interface";
import {InjectModel} from "@nestjs/mongoose";

@Injectable()
export class LoginService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

    async find(email: String, password: String): Promise<User>{
        let user = await this.userModel.find({email: email}).exec();
        console.log(user);
        if (user[0].password === password){
            return await user;
        } else {
            throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
        }
    }
}
