import {Controller, Get} from '@nestjs/common';
import {LoginService} from "../login/login.service";
import {InscriptionService} from "./inscription.service";

@Controller('inscription')
export class InscriptionController {
    constructor(private readonly inscriptionService: InscriptionService) {}

    @Get()
    async getListUser(){
        return await this.inscriptionService.findAll();
    }
}
