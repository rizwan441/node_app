// import expess from ('express')
const express = require('express')
const path = require('path')

const  app = express();

app.get('/get',(req,res)=>{
    const pathlocation = path.resolve()
    // res.json({
    //     sucess:true,
    //     product:[]
    // })
})

app.listen(5000,()=>{
    console.log("server is running")
})