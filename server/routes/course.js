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



module.exports=router;