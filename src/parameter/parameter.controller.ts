import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {ParamService} from "./parameter.service";

@Controller('administrate')
export class ParamController {
    constructor(private readonly parameterService: ParamService) {}

    @Get()
    async getAllParameters(){
        return await this.parameterService.findAll();
    }

    @Post()
    async addParameters(@Body() body) {
        return await this.parameterService.create(body);
    }

    @Get(':id')
    async getParameters(@Param('id') id){
        return await this.parameterService.findOne(id);
    }

    @Put(':id')
    async updateParameters(@Param('id') id, @Body() body){
        console.log(body);
        return await this.parameterService.update(id, body);
    }

    @Delete(':id')
    async removeParameters(@Param('id') id){
        return await this.parameterService.delete(id);
    }
}
