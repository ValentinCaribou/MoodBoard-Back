import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Mood} from "../interfaces/mood.interface";
import { Model } from 'mongoose';
import {CreateMoodDto} from "../dto/createMood.dto";

@Injectable()
export class MoodService {
    constructor(@InjectModel('Mood') private readonly moodModel: Model<Mood>) {}

    async findAll(): Promise<Mood[]> {
        return await this.moodModel.find().exec();
    }

    async findOne(id): Promise<Mood> {
        let mood = await this.moodModel.find({_id: id}).exec();
        return mood;
    }

    async update(id, body): Promise<Mood> {
        const mood = await this.moodModel.findById(id).exec();

        if (!mood._id) {
            console.log('not found');
        }
        mood.weekMood = body.weekMood;
        await this.moodModel.findByIdAndUpdate(id, mood).exec();
        return await this.moodModel.findById(id).exec();
    }

    async create(createMoodDto: CreateMoodDto): Promise<Mood> {
        const createdMood = new this.moodModel(createMoodDto);
        return await createdMood.save();
    }

    async delete(id): Promise<string> {
        try {
            return await this.moodModel.findByIdAndRemove(id).exec();
        }
        catch (err){
            return 'The todo could not be deleted';
        }
    }
}
