import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {MoodService} from "./mood.service";

@Controller('mood')
export class MoodController {
    constructor(private readonly moodService: MoodService) {}

    @Get()
    async getListMood(){
        return await this.moodService.findAll();
    }

    @Post()
    async addRow(@Body() body) {
        return await this.moodService.create(body);
    }

    @Get(':id')
    async getMood(@Param('id') id){
        return await this.moodService.findOne(id);
    }

    @Put(':id')
    async updateMood(@Param('id') id, @Body() body){
        return await this.moodService.update(id, body);
    }

    @Delete(':id')
    async remove(@Param('id') id){
        return await this.moodService.delete(id);
    }
}
