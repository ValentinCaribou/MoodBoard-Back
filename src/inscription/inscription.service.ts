import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import { Model } from 'mongoose';
import {User} from "../interfaces/user.interface";
import {CreateUserDto} from "../dto/createUser.dto";

@Injectable()
export class InscriptionService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

    async findAll(): Promise<User[]> {
        return await this.userModel.find().exec();
    }

    async create(createUserDto: CreateUserDto): Promise<User> {
        const createdUser = new this.userModel(createUserDto);
        return await createdUser.save();
    }
}
