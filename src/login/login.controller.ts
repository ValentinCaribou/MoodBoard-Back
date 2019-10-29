import {Body, Controller, Post} from '@nestjs/common';
import {LoginService} from "./login.service";

@Controller('login')
export class LoginController {
    constructor(private readonly loginService: LoginService) {}

    @Post()
    async login(@Body() body) {
        let {email, password} = body;
        console.log("email : ", email);
        console.log("password : ", password);
        return await this.loginService.find(email, password)
    }
}
