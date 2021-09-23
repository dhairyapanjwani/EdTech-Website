const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const Course=require('../models/Course');
const multer = require('multer');

var date;

const storage1=multer.diskStorage({
  destination:(req,file,callback)=>{
    callback(null,"./uploads/cover");
  },
  filename:(req,file,callback)=>{
    date=Date.now();
    callback(null,date+"_"+"cover"+"_"+file.originalname);

  }
})
const storage2=multer.diskStorage({
  destination:(req,file,callback)=>{
    callback(null,"./uploads/attachments");
  },
  filename:(req,file,callback)=>{
    callback(null,date+"_"+"attachment"+"_"+file.originalname);

  }
})

const upload1=multer({storage:storage1});
const upload2=multer({storage:storage2});

router.post("/cover",upload1.single("coverFile"), async (req, res) => {
  
    console.log(req.file.path)
    const newCourse = new Course({
      title:req.body.title,
      description:req.body.description,
      category:req.body.category,
      amount:req.body.amount,
      cover_name:date+"_"+"cover"+"_"+req.body.cover_name,
      
    });
    newCourse
    .save()
    .then(()=>{
      res.status(200).json({message:"success",course:newCourse});
    })
    .catch((err)=>{
      res.status(500).json({message:"failure",error:err});
    });
    
});

router.post("/attachment",upload2.single("attachmentFile"), async (req, res) => {

    console.log(req.file.path)

    Course.findById(req.body.courseId,function (err, result) {
    result.attachment_name=date+"_attachment_"+req.body.attachment_name
    result.markModified('attachment_name');
    result
    .save()
    .then(()=>{
      res.status(200).json({
        message:"success",
        course:result
      })
      console.log("success")
    })
    .catch((err)=>{
      console.log(err)
      res.status(500).json({
        message:"failure",
        error:err
      })
    })
    
  }
  )
  .catch((err)=>{
    console.log(err)
  })
    
});





module.exports = router;
