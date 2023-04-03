// import expess from ('express')
const express = require('express')

const  app = express();

app.get('/',(req,res)=>{
    res.sendStatus(404)
})

app.listen(5000,()=>{
    console.log("server is running")
})