const mongoose=require('mongoose');

const videoSchema=mongoose.Schema({
    id:mongoose.Schema.Types.ObjectId,
    title:{type:String},
    description:{type:String},
    video_name:{type:String,default:""},
    thumbnail_name:{type:String,default:""},
    views:{type:Number,default:0},
    comments:{type:Array,default:[],},
    courseId:{type:String,},   
},
{ timestamps: true }
);

module.exports=mongoose.model('Video',videoSchema);
