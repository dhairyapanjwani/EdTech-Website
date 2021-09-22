const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const Course=require('../models/Course');
const multer = require('multer');
var date;
const storage=multer.diskStorage({
    destination:(req,file,callback)=>{
      callback(null,"./uploads/cover");
    },
    filename:(req,file,callback)=>{
        date=Date.now();
      callback(null,date+"_"+"cover"+"_"+file.originalname);
    }
  })
  
const upload=multer({storage:storage});

router.post("/upload",upload.single("coverFile"), async (req, res) => {
  
    const newCourse = new Course({
      title:req.body.title,
      description:req.body.description,
      cover_name:date+"_"+"cover"+"_"+req.body.cover_name,
      rating:Math.floor(Math.random() * 5) + 1,
      category:req.body.category
    });
    newCourse
    .save()
    .then(()=>{
      res.status(200).json({message:"success",course:newCourse});
    })
    .catch(()=>{
      res.status(500).json({message:"failure"});
    });
    
});

router.get("/all",async (req, res) => {
    Course.find({},(err,result)=>{
      if(err){
        res.status(500).json(err);
      }
      res.status(200).json({message:"success",courses:result});
  })
})

router.get("/:category",async (req, res) => {

    Course.find({'category':req.params.category},(err,result)=>{
      if(err){
        res.status(500).json(err);
      }
      res.status(200).json({message:"success",courses:result});
  })
  })

  router.get("/single/:id",async (req, res) => {

    Course.findById(req.params.id,(err,result)=>{
      if(err){
        res.status(500).json(err);
      }
      console.log(result)
      res.status(200).json({message:"success",course:result});
  })
  })

  router.put("/like",async (req, res) => {

    const userId=req.body.userId
    const courseId=req.body.courseId

    Course.findById(courseId,(err,course)=>{
      if(err){
        res.status(500).json({message:"failure",error:err});
      }
      course.likes.push(userId)
      course.markModified('likes');
      course.save()
      res.status(200).json({message:"success",course:course});
  })
  })




  router.put("/dislike", async (req, res) => {
    const userId=req.body.userId;
    const courseId=req.body.courseId;
    try{
      Course.findById(courseId,function (err, result) {
      if(result.likes.includes(userId)){
        const index = result.likes.indexOf(userId);
        if (index > -1) {
          result.likes.splice(index, 1);
        }
        result.markModified('likes');
        result.save();
        res.status(200).json({
          message:"success",
          course:result
        })
      }
      else{
        res.status(200).json({
          message:"not liked"
        })
      }
      
    }
    ).catch((err)=>{console.log(err)})
    }catch(err){
      res.status(500).json(err)
    }
  });

  router.get("/getliked/:id",async (req, res) => {
    var courses=[];
    Course.find({},(err,result)=>{
      if(err){
        res.status(500).json(err);
      }
      for (let i=0;i<result.length;i++){
        if(result[i].likes.includes(req.params.id)){
          courses.push(result[i])
        }
      }
      
      res.status(200).json({message:"success",courses:courses});
  })
  })

module.exports=router;