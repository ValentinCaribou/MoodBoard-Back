import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Parameter} from "../interfaces/parameter.interface";
import { Model } from 'mongoose';
import {CreateParamDto} from "../dto/createParam.dto";

@Injectable()
export class ParamService {
    constructor(@InjectModel('Parameter') private readonly parameterModel: Model<Parameter>) {}

    async findAll(): Promise<Parameter[]> {
        return await this.parameterModel.find().exec();
    }

    async findOne(id): Promise<Parameter> {
        let param = await this.parameterModel.find({_id: id}).exec();
        return param;
    }

    async update(id, body): Promise<Parameter> {
        let param = await this.parameterModel.findById(id).exec();

        if (!param._id) {
            console.log('not found');
        }
        console.log(param)
        param = body;
        await this.parameterModel.findByIdAndUpdate(id, param).exec();
        return await this.parameterModel.findById(id).exec();
    }

    async create(createParamDto: CreateParamDto): Promise<Parameter> {
        const createdParam = new this.parameterModel(createParamDto);
        return await createdParam.save();
    }

    async delete(id): Promise<string> {
        try {
            await this.parameterModel.findByIdAndRemove(id).exec();
            return 'The todo has been deleted';
        }
        catch (err){
            return 'The todo could not be deleted';
        }
    }
}
