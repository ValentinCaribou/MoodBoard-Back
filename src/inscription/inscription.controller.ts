import {Body, Controller, Get, Post} from '@nestjs/common';
import {LoginService} from "../login/login.service";
import {InscriptionService} from "./inscription.service";

@Controller('inscription')
export class InscriptionController {
    constructor(private readonly inscriptionService: InscriptionService) {}

    @Get()
    async getListUser(){
        return await this.inscriptionService.findAll();
    }

    @Post()
    async inscription(@Body() body) {
        return await this.inscriptionService.create(body);
    }
}
