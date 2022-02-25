const express=require("express");
const User=require('../models/user.model');
const bcrypt=require("bcryptjs");
const jwt=  require('jsonwebtoken')
const router=express.Router()

router.get('/',(req,res)=>{
    res.send(`Hello world from server routers`)
});

//using Promises
// router.post("/register",(req,res)=>{
//         const {name,email,phone,work,password,cpassword}=req.body
       
//         if(!name || !email || !phone || !work || !password|| !cpassword){
//             // const userData=User
//             return res.status(401).json({error:"Same field are Filled mandatory"})
//         }
//         User.findOne({email:email})
//         .then( (userExist)=>{
//             if(userExist){
//                 return res.status(401).json({error:"Email Already Exist"})
//             }

//             const userData=new User({name,email,phone,work,password,cpassword})
//             User.save().then(()=>{
//                 res.status(401).json({message:"User Data Saved"})
//             }).catch((error)=>{
//                 res.status(501).json({error:"Server Error"})
//             }) 
//             .catch((error)=>{
//             res.status(501).json({error:"Server Error"})
//         })
//     })
// })

router.post("/register", async (req,res)=>{
            const {name,email,phone,work,password,cpassword}=req.body
            console.log(req.body);
            if(!name || !email || !phone || !work || !password|| !cpassword){
                return res.status(401).json({error:"Same field are Filled mandatory"})
            }
            try {
                    const userExist=await User.findOne({email:email})
                    if(userExist){
                        return res.status(401).json({error:"Email Already Exist"})
                    }else if(password != cpassword){
                        res.status(402).json({message:"Passwords are not matched.."})
                    }else{
                        const userData=new User({name,email,phone,work,password,cpassword})
                        const userRegister=await userData.save();
                        if(userRegister){
                            res.status(201).json({message:"User Data Saved"})
                        }
                    } 
            } catch (error) {
                res.status(501).json({error:"Server Error"})
            }
});

router.post('/signin',async(req,res)=>{
    try {
        const {email,password}=req.body;
        // console.log(email,password);                                                                                                                                                                                                                                                                                                                                                                                                                 
        if(!email || !password){
            return res.status(400).json({error:"please fill the valid credentials"})
        }
        console.log(email);
        const userLogin=await User.findOne({email:email})
        console.log("userLogin1",userLogin.password);
        if(userLogin){  
            const isMatch=await bcrypt.compare(password,userLogin.password)
            // console.log(isMatch);
            const token=await userLogin.generateAuthToken()
            console.log(token);
            res.cookie("jwt_token",token,{
                expires:new Date(Date.now()+25892000000),
                httpOnly:true
            })
            if(!isMatch){
                res.status(401).json({error:"invalid Credentials"})
            }else{
                 res.status(200).json({message:"User Login Successfully"})
            }

        }else{
            res.status(401).json({error:"invalid Credentials"})
        }
        
        
        
       
    } catch (error) {
        console.log(error)
    }
})

module.exports=router;