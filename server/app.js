const dotenv=require("dotenv");
const express=require("express");
dotenv.config({path:'./config.env'})
const app=express();
//for understand post data to convert into json
app.use(express.json())
require('./db/db')
//routes
app.use(require("./routers/auth"))
const port=process.env.PORT;
// const User=require('./models/user.model')
//middleware

const middleware=(req,res,next)=>{
    console.log("Enter Into middleware")
    next();
}




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