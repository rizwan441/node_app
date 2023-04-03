// import expess from ('express')
const express = require('express')
impo

const  app = express();

app.get('/get',(req,res)=>{
    res.json({
        sucess:true,
        product:[]
    })
})

app.listen(5000,()=>{
    console.log("server is running")
})