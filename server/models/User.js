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
    confirmationCode:{
        type:String,
    },
    status: {
        type: String, 
        enum: ['Pending', 'Active'],
        default: 'Pending'
    },
    results:{
        type:Array,
        default:[],
    },
    enrolled:{
        type: Array,
        default: []
    },
    profile:{
        type:String,
        default:"2.jpg"
    }

},
{ timestamps: true }
);

module.exports=mongoose.model('User',userSchema);
