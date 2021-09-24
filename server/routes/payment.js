const RAZORPAY_KEY_ID = "rzp_test_CYQ81y4KZJOjlT"
const RAZORPAY_SECRET = "lgSfaQdWD6Wj7crkyql8Tjr2"
const User=require('../models/User');

const express = require("express");
const Razorpay = require("razorpay");

const router = express.Router();

router.post("/orders", async (req, res) => {
    
    const amount=req.body.amount;
    
    try {
        const instance = new Razorpay({
            key_id: RAZORPAY_KEY_ID,
            key_secret: RAZORPAY_SECRET,
        });
        const options = {
            amount: parseInt(amount)*100, 
            currency: "INR",
            receipt: "receipt_order_74394",
        };

        const order = await instance.orders.create(options);

        if (!order) return res.status(500).send("Some error occured");

        res.json(order);
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
});


router.post("/finalorders", async (req, res) => {
    const userId=req.body.userId;
    const courseId=req.body.courseId;
    const amount=req.body.amount;
    const date=Date.now()
    
    try {
        const instance = new Razorpay({
            key_id: RAZORPAY_KEY_ID,
            key_secret: RAZORPAY_SECRET,
        });
        const options = {
            amount: parseInt(amount)*100, 
            currency: "INR",
            receipt: "receipt_order_74394",
        };

        const order = await instance.orders.create(options);

        if (!order){ 
        return res.status(500).send("Some error occured");}

        await User.findById(userId,function (err, result) {
            console.log(result)
            result.enrolled.push(courseId)
            result.markModified('enrolled');
            result.save()
            .then(()=>{
                res.status(200).json({
                    message:"success",
                    user:result
                })
            })
            
          }
          ).catch((err)=>{
              console.log(err)
            })
        
        

    } catch (error) {
        console.log(error)
    }
});



router.post("/finalordersprofile", async (req, res) => {
    const donorId=req.body.donorId;
    const postId=req.body.postId;
    const ngoId=req.body.ngoId;
    const amount=req.body.amount;
    const date=Date.now()
    console.log(donorId,postId,amount)
    
    try {
        const instance = new Razorpay({
            key_id: RAZORPAY_KEY_ID,
            key_secret: RAZORPAY_SECRET,
        });
        const options = {
            amount: parseInt(amount)*100, 
            currency: "INR",
            receipt: "receipt_order_74394",
        };

        const order = await instance.orders.create(options);

        if (!order){ 
        return res.status(500).send("Some error occured");}

        await User.findById(donorId,function (err, result) {
            console.log(result)
            result.donations_made.push({ngoId:ngoId,amount:amount,donationTime:date})
            result.markModified('donations_made');
            result.save();
            
          }
          ).catch((err)=>{
              res.status(500).json(err);
            })

        await User.findById(ngoId,function (err, result) {
            console.log(result)
            result.donations_received.push({donorId:donorId,amount:amount,donationTime:date})
            result.markModified('donations_received');
            result.save();
            
            }
            ).catch((err)=>{
                res.status(500).json(err);
            })
        
        res.status(200).json({
            message:"success"
        })

    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
});



module.exports = router;