import express from "express";

const app=express();

app.get("/",(req,res)=>{
    console.log("Internet Mini simulator running....")
})

app.listen(3000,()=>{
    console.log("server listening at the port 3000");
})