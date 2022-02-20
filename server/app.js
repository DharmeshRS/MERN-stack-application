const express=require("express");
const mongoose=require("mongoose")
const app=express();
const port=8000;
const DB="mongodb+srv://dharmesh:dharmesh@cluster0.zdycv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(DB).then(()=>{
    console.log("Connection Established")
}).catch((err)=>console.log("Something went to be wrong"))
//middleware

const middleware=(req,res,next)=>{
    console.log("Enter Into middleware")
    next();
}


app.get('/',(req,res)=>{
    res.send(`Hello world from server`)
});

app.get('/about',middleware,(req,res)=>{
    console.log("about");
    res.send(`Hello world from about`)
});

app.get('/contact',(req,res)=>{
    res.send(`Hello world from Contact`)
});

app.get('/signup',(req,res)=>{
    res.send(`Hello world from signup`)
});

app.get('/signin',(req,res)=>{
    res.send(`Hello world from signIn`)
});


app.listen(port,()=>{
    console.log(`server is running on ${port}`);
})


//