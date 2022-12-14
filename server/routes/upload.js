const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const Video=require('../models/Video');
const multer = require('multer');

var date;

const storage1=multer.diskStorage({
  destination:(req,file,callback)=>{
    callback(null,"../client/public/uploads/videos");
  },
  filename:(req,file,callback)=>{
    date=Date.now();
    callback(null,date+"_"+"video"+"_"+file.originalname);

  }
})
const storage2=multer.diskStorage({
  destination:(req,file,callback)=>{
    callback(null,"../client/public/uploads/thumbnails");
  },
  filename:(req,file,callback)=>{
    callback(null,date+"_"+"thumbnail"+"_"+file.originalname);

  }
})
const storage3=multer.diskStorage({
  destination:(req,file,callback)=>{
    callback(null,"../client/public/uploads/attachments");
  },
  filename:(req,file,callback)=>{
    callback(null,date+"_"+"attachment"+"_"+file.originalname);

  }
})

const upload1=multer({storage:storage1});
const upload2=multer({storage:storage2});
const upload3=multer({storage:storage3});

router.post("/video",upload1.single("videoFile"), async (req, res) => {
  
    console.log(req.file.path)
    const newVideo = new Video({
      title:req.body.title,
      description:req.body.description,
      video_name:date+"_"+"video"+"_"+req.body.video_name,
    });
    newVideo
    .save()
    .then(()=>{
      res.status(200).json({message:"success",videoFile:newVideo});
    })
    .catch(()=>{
      res.status(500).json({message:"failure"});
    });
    
});

router.post("/thumbnail",upload2.single("thumbnailFile"), async (req, res) => {

    console.log(req.file.path)

    Video.findById(req.body.videoId,function (err, result) {
    result.thumbnail_name=data+"_thumbnail_"+req.body.thumbnail_name
    result.markModified('thumbnail_name');
    result
    .save()
    .then(()=>{
      res.status(200).json({
        message:"success",
        video:result
      })
    })
    .catch((err)=>{
      console.log(err)
      res.status(500).json({
        message:"failure"
      })
    })
    
  }
  )
  .catch((err)=>{
    console.log(err)
    res.status(500).json({
      message:"failure"
    })
  })
    
});

router.post("/attachment",upload3.single("attachmentFile"), async (req, res) => {

  console.log(req.file.path)

  Video.findById(req.body.videoId,function (err, result) {
  result.attachment_name=data+"_attachment_"+req.body.attachment_name
  result.markModified('attachment_name');
  result
  .save()
  .then(()=>{
    res.status(200).json({
      message:"success",
      video:result
    })
  })
  .catch((err)=>{
    console.log(err)
    res.status(500).json({
      message:"failure"
    })
  })
  
}
)
.catch((err)=>{
  console.log(err)
  res.status(500).json({
    message:"failure"
  })
})
  
});

module.exports = router;
