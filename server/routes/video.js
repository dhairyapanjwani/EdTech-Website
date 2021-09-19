const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const Video=require('../models/Video');

router.get("/all",async (req, res) => {
    Video.find({},(err,result)=>{
      if(err){
        res.status(500).json(err);
      }
      res.status(200).json({message:"success",videos:result});
  })
})

router.get("/category/:category",async (req, res) => {

    Video.find({'category':req.params.category},(err,result)=>{
      if(err){
        res.status(500).json(err);
      }
      res.status(200).json({message:"success",videos:result});
  })
  })

router.put("/comment", async (req, res,next) => {
    const userId=req.body.userId;
    const videoId=req.body.videoId;
    const text=req.body.text;
    console.log(userId,videoId,text)
    try{
      Video.findById(videoId,function (err, result) {
      result.comments.push({userId:userId,text:text})
      result.markModified('comments');
      result.save();
      res.status(200).json({
        message:"success",
        video:result
      })
    }
    )
    }catch(err){
      res.status(500).json(err)
    }
  });

  router.put("/quiz/add", async (req, res,next) => {
    const videoId=req.body.videoId;
    const quiz=req.body.quiz;
    try{
      Video.findById(videoId,function (err, result) {
      result.quiz.push(quiz)
      result.markModified('quiz');
      result.save();
      res.status(200).json({
        message:"success",
        video:result
      })
    }
    )
    }catch(err){
      res.status(500).json(err)
    }
  });

  router.get("/quiz/get/:videoId", async (req, res,next) => {
    const videoId=req.params.videoId;
    try{
      Video.findById(videoId,function (err, result) {
      res.status(200).json({
        message:"success",
        quiz:result.quiz
      })
    }
    )
    }catch(err){
      res.status(500).json(err)
    }
  });

module.exports=router;