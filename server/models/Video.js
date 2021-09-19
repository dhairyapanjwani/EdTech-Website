const mongoose=require('mongoose');

const videoSchema=mongoose.Schema({
    id:mongoose.Schema.Types.ObjectId,
    title:{type:String},
    description:{type:String},
    video_name:{type:String,default:""},
    thumbnail_name:{type:String,default:""},
    attachment_name:{type:String,default:""},
    comments:{
        type:Array,
        default:[],
    },
    category:{
        type:String
    },
    quiz:{
        type:Array,
        default:[],
    }
},
{ timestamps: true }
);

module.exports=mongoose.model('Video',videoSchema);
