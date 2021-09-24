const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const Course=require('../models/Course');
const multer = require('multer');
const axios=require('axios');
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
      rating:Math.floor(Math.random() * (5 - 1) + 1),
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

router.get("/getcategory/:category",async (req, res) => {

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
      if(course.likes.includes(userId)){
        const index = course.likes.indexOf(userId);
        if (index > -1) {
          course.likes.splice(index, 1);
        }
        course.markModified('likes');
        course.save();
      }
      else{
        course.likes.push(userId)
        course.markModified('likes');
        course.save()
      }
      res.status(200).json({message:"success",course:course});
  })
  })

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


//for machine learning
router.put("/update",async (req, res) => {

  const courseId=req.body.courseId

  Course.findById(courseId,(err,course)=>{
    if(err){
      res.status(500).json({message:"failure",error:err});
    }
    
      course.ml_comments=Math.floor(Math.random() * (2000 - 100 + 1) + 100);
      
      course.markModified('ml_comments');
      course.save()
      .then((course)=>{
        course.ml_likes=Math.floor(Math.random() * (3000 - 100 + 1) + 100);
        course.markModified('ml_likes');
        course.save()
        .then((course)=>{
          res.status(200).json({message:"success",course:course});
        })
      })
      
    
    
})
})


router.get("/getranked",async (req, res) => {
  var courses=[];
  var predictions
  var send=[]
  Course.find({},(err,course)=>{
    if(err){
      res.status(500).json(err);
    }
    for (let i=0;i<course.length;i++){
        var ml_comments=course[i].ml_comments;
        var ml_likes=course[i].ml_likes;
        send.push([ml_comments,ml_likes])
        courses.push(course[i])
    }
    axios({
      url: `http://localhost:8008/${JSON.stringify({send}["send"])}`,
      method: "get",
    })
      .then(response => {
        var predictions=response.data.data;
        console.log(predictions)
        for(let i=0;i<predictions.length;i++){
          courses[i].results.push(predictions[i])
        }
        courses.sort((a,b) => {
          if(a.results[0] > b.results[0]) return -1;
          if(a.results[0] < b.results[0]) return 1;
          return 0;
      });
      console.log(courses)
        res.status(200).json({message:"success",courses:courses});
      })
    
})
})

















module.exports=router;