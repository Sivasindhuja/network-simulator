import express from "express";

const app=express();


//middleware to log the request details

function logging(req,res,next){
    console.log(req.method);
    console.log(req.originalUrl);
    console.log(req.ip);
     console.log(req.headers);
    next();

}
app.use(logging);
app.get("/",(req,res)=>{
    res.send("<h1>Welcome to the mini internet Simulator!!</h1>")
})

app.listen(3000,()=>{
    console.log("server listening at the port 3000");
})