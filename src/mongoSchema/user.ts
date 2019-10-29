import * as mongoose from 'mongoose';

export const userSchema = new mongoose.Schema({
    email: String,
    password:String,
    role:String,
    name:String,
    surname:String,
    alias:String,
});
