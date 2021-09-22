const mongoose=require('mongoose');

const courseSchema=mongoose.Schema({
    id:mongoose.Schema.Types.ObjectId,
    title:{type:String},
    description:{type:String},
    cover_name:{type:String,default:""},
    rating:{type:Number,default:0},
    category:{type:String,default:""},
    quiz:{type:Array,default:[]},
    results:{type:Array,default:[]},
    amount:{type:Number,default:0},
    attachment_name:{type:String,default:""},
},
{ timestamps: true }
);

module.exports=mongoose.model('Course',courseSchema);
