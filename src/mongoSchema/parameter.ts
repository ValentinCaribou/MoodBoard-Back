import * as mongoose from 'mongoose';

export const parameterSchema = new mongoose.Schema({
    diffusionList : String,
    theme : String,
    formatPreference : String,
    listEmojis : [],
    listThemes : [],
});