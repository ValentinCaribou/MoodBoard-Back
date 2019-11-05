import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {ParamService} from "./parameter.service";

@Controller('administrate')
export class ParamController {
    constructor(private readonly parameterService: ParamService) {}

    @Get()
    async getListMood(){
        return await this.parameterService.findAll();
    }

    @Post()
    async addRow(@Body() body) {
        return await this.parameterService.create(body);
    }

    @Get(':id')
    async getMood(@Param('id') id){
        return await this.parameterService.findOne(id);
    }

    @Put(':id')
    async updateMood(@Param('id') id, @Body() body){
        console.log(body);
        return await this.parameterService.update(id, body);
    }

    @Delete(':id')
    async remove(@Param('id') id){
        return await this.parameterService.delete(id);
    }
}
