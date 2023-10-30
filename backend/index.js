import express from "express";
const app=express()
const port=3000
console.log("hello world");
app.listen(port,()=>{
    console.log(`server started at ${port}`)
})
app.get('/input',(req,res)=>{
    res.send('input')
})
app.post('/input',(req,res)=>{
    console.log(req.body);
})
app.get('/output',(req,res)=>{
    res.send('output')
})
app.get('/',(req,res)=>{
    res.send('hii')
})