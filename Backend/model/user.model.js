const mongoose=require('mongoose')

const userSchema=mongoose.Schema({
    firstname :{
        type:String,
        required: true
    },
    lastname:{
        type:String,
        required: true
    },
    username:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true,
        unique: true
    },
    password:{
        type:String,
        required: true
    },
    phone:{
        type:String,
        required: true,
        min:10
    }
})

const userModal=mongoose.model('user',userSchema)

module.exports={userModal}