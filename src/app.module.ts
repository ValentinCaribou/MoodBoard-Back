import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginController } from './login/login.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {userSchema} from "./mongoSchema/user";
import {weekMoodSchema} from "./mongoSchema/mood";
import { LoginService } from './login/login.service';
import { InscriptionController } from './inscription/inscription.controller';
import { InscriptionService } from './inscription/inscription.service';
import { MoodController } from './mood/mood.controller';
import { MoodService } from './mood/mood.service';

@Module({
  imports: [
      MongooseModule.forRoot('mongodb://moodboard:27017/Moodboard'),
      MongooseModule.forFeature([{ name: 'User', schema: userSchema }]),
      MongooseModule.forFeature([{ name: 'Mood', schema: weekMoodSchema }])
  ],
  controllers: [AppController, LoginController, InscriptionController, MoodController],
  providers: [AppService, LoginService, InscriptionService, MoodService],
})
export class AppModule {}
