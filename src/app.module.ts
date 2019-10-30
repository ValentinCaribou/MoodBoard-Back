import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginController } from './login/login.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {userSchema} from "./mongoSchema/user";
import { LoginService } from './login/login.service';
import { InscriptionController } from './inscription/inscription.controller';
import { InscriptionService } from './inscription/inscription.service';

@Module({
  imports: [
      MongooseModule.forRoot('mongodb://localhost:27017/Moodboard'),
      MongooseModule.forFeature([{ name: 'User', schema: userSchema }])
  ],
  controllers: [AppController, LoginController, InscriptionController],
  providers: [AppService, LoginService, InscriptionService],
})
export class AppModule {}
