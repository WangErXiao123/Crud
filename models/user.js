const mongoose = require('mongoose')

// mongoose.connect('mongodb://localhost/test', { useMongoClient:true })
mongoose.connect('mongodb://localhost/test')

const Schema = mongoose.Schema

const userSchema = new Schema({
    // name : {
    //     type:String,
    //     required:true
    // },
    nickname : {
        type:String,
        required:true
    },
    password : {
        type:String,
        required:true
    },
    email : {
        type:String,
        required:true
    },
    created_time : {
        type:Date,
        default:Date.now
    },
    last_modified_time : {
        type:Date,
        default:Date.now
    },
    avatsr:{
        type:String,
        default:'/public/img/avatar-default.png'
    },
    bio:{
        type:String,
        default:''
    },
    gender:{
        type:Number,
        enum:[-1,0,1],
        default:-1
    },
    birthday:{
        type:Date
    },
    status:{
        type:Number,
        enum:[0,1,2],
        default:0
    }
})

module.exports = mongoose.model('User', userSchema)