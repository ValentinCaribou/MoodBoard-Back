import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginController } from './login/login.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {userSchema} from "./mongoSchema/user";
import {weekMoodSchema} from "./mongoSchema/mood";
import {parameterSchema} from "./mongoSchema/parameter"
import { LoginService } from './login/login.service';
import { InscriptionController } from './inscription/inscription.controller';
import { InscriptionService } from './inscription/inscription.service';
import { MoodController } from './mood/mood.controller';
import { MoodService } from './mood/mood.service';
import { ParamController } from './parameter/parameter.controller';
import { ParamService } from './parameter/parameter.service';

@Module({
  imports: [
      MongooseModule.forRoot('mongodb://localhost:27017/Moodboard'),
      MongooseModule.forFeature([{ name: 'User', schema: userSchema }]),
      MongooseModule.forFeature([{ name: 'Mood', schema: weekMoodSchema }]),
      MongooseModule.forFeature([{ name : 'Parameter', schema: parameterSchema}])
  ],
  controllers: [AppController, LoginController, InscriptionController, MoodController, ParamController],
  providers: [AppService, LoginService, InscriptionService, MoodService, ParamService],
})
export class AppModule {}
