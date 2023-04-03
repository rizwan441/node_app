// import expess from ('express')
const express = require('express')
const path = require('path')

const  app = express();


app.use(express.static((path.join(path.resolve(),"public"))))

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

app.get

app.listen(5000,()=>{
    console.log("server is running")
})