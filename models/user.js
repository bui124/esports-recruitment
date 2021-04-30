const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const UserSchema = new mongoose.Schema({
    username:String,
    password:String,
    email:String,
    phone:Number,
    discord:String,
    leagueoflegends:Boolean,
    overwatch:Boolean,
    callofduty:Boolean,
    valorant:Boolean,
    fortnite:Boolean,
    apexlegends:Boolean
}) ;
UserSchema.plugin(passportLocalMongoose); //also auto salt and hash password
module.exports = mongoose.model("User",UserSchema);