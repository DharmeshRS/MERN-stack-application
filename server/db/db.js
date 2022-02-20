const mongoose=require("mongoose");

const DB=process.env.DATABASE;
// console.log(DB)
mongoose.connect(DB).then(()=>{
    console.log("Connection Established")
}).catch((err)=>console.log("Something went to be wrong"))
