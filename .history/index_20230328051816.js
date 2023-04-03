// import expess from ('express')
const express = require('express')
const path = require('path')



const  app = express();

const users = []

// using midddleware?
app.use(express.urlencoded({extended:true}))
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

app.get('/success',(req,res)=>{
    res.re
})

app.post('/',(req,res)=>{
    users.push({userName:req.body.name, email: req.body.email})
    res.render("success.ejs")
    console.log(req.body)

})

app.listen(5000,()=>{
    console.log("server is running")
})