const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique: true,
    },
    phone:{
        type:String,
        required:true,
        unique:true,
    },
    doctor:{
        type:String,
        required:true,
    },
    appointmentDate:{
        type:String,
        required:true,
    },
});

module.exports = mongoose.model('User', userSchema);