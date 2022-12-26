const mongoose = require("mongoose");
const Schema = mongoose.Schema
const UserSchema = new Schema({
    name : {
        type : String,
        required : true,
        min : 6,
        max : 50
    },
    email : {
        type : String,
        required : true,
        min : 20,
        max : 30
    },
    password : {
        type : String,
        required : true,
        max : 1200,
        min : 6
    },
    ValidateToken : {
        type : String
    },
    isVerified : {
        type : Boolean,
        default : false
    },
    role : {
       type : String,
       default : 'admin'
    },
    date : {
        type : Date,
        default : Date.now()
    }

})

module.exports = mongoose.model('UserModel', UserSchema);

