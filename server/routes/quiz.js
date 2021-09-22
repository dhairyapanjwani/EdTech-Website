const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const Course=require('../models/Course');
const User=require('../models/User');

router.put("/addscore", async (req, res) => {
  const userId=req.body.userId;
  const courseId=req.body.courseId;
  const score=req.body.score;
    User.findById(userId,function (err, result) {
        result.results.push({courseId:courseId,score:score,time:Date.now()})
        result.markModified('results');
        result.save()
        .then(()=>{
            res.status(200).json({message:"success", user:"result"})
        }).catch((err)=>{
            console.log(err)
            res.status(500).json({message:"failure"})
        })        
    }
)
});

router.get("/getresult",async (req, res) => {
    const userId=req.body.userId
    const courseId=req.body.courseId
    console.log(userId,courseId)
    var course_name="";
    var category_name="";
    
    var score=""
    
    await User.findById(userId,async (err,user)=>{
      for (let i=0;i<user.results.length;i++){
          if(user.results[i].courseId==courseId){
              score=user.results[i].score
              await Course.findById(courseId,(err,course)=>{
                  course_name=course.title;
                  category_name=course.category
                  res.status(200).json({message:"success",course_name:course_name,category_name:category_name,average_score:Math.floor(Math.random() * (Math.floor(70) - Math.ceil(50)) + Math.ceil(50)),highest_score:Math.floor(Math.random() * (Math.floor(100) - Math.ceil(95)) + Math.ceil(95)),lowest_score:Math.floor(Math.random() * (Math.floor(50) - Math.ceil(20)) + Math.ceil(20)),score:parseInt(score)})
                  
            })
          }
          else{
              console.log("no course found")
          }
      }
  })
  

})





module.exports=router;