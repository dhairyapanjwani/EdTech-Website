const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const User=require('../models/User');

router.get("/all",async (req, res) => {
    User.find({},(err,result)=>{
      if(err){
        res.status(500).json(err);
      }
      res.status(200).json({message:"success",users:result});
  })
})

router.get("/ranked",async (req, res) => {
    User.find({},(err,result)=>{
      if(err){
        res.status(500).json(err);
      }
      result.sort((a,b) => {
        if(a.score > b.score) return -1;
        if(a.score < b.score) return 1;
        return 0;
    });
      res.status(200).json({message:"success",users:result});
  })
})

router.put("/changescore",async (req, res) => {
  User.findById(req.body.userId,(err,result)=>{
    result.score=result.score+req.body.score;
    result.markModified('score');
    result.save()
    .then(()=>{
      res.status(200).json({message:"success",users:result});
    })
  }).catch((err)=>{
    console.log(err)
    res.status(500).json({message:"failure"});
  })
    
})





module.exports=router;