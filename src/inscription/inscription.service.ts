import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import { Model } from 'mongoose';
import {User} from "../interfaces/user.interface";
import {CreateUserDto} from "../dto/createUser.dto";
import {Mood} from "../interfaces/mood.interface";

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

    async update(id, body): Promise<User> {
        const user = await this.userModel.findById(id).exec();

        if (!user._id) {
            console.log('not found');
        }
        user.role = body.role;
        await this.userModel.findByIdAndUpdate(id, user).exec();
        return await this.userModel.findById(id).exec();
    }
}
