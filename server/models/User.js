const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
    id:mongoose.Schema.Types.ObjectId,
    first_name:{type:String},
    last_name:{type:String},
    email:{
        type:String,
        unique:true,
        match:/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    },
    phone:{
        type:String,
        default: "",
    },
    address:{
        type:String,
        default:"",
    },
    password:{
        type:String,
    },
    quiz:{
        type:Array,
        default:[],
    }
},
{ timestamps: true }
);

module.exports=mongoose.model('User',userSchema);
