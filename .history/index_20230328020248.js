// import expess from ('express')
const express = require('express')
const path = require('path')

const  app = express();


console.log(path.join)

// setting a view engine
// app.set ("view engine", "ejs")

app.get('/',(req,res)=>{
    const pathlocation = path.resolve();

    res.render("index.ejs",{name: "rizwan"})
    // res.json({
    //     sucess:true,
    //     product:[]
    // })
})

app.listen(5000,()=>{
    console.log("server is running")
})