// import expess from ('express')
const express = require('express')
const path = require('path')



const  app = express();

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

app.post('/',(req,res)=>{
    users.push({userName:req.body})
    console.log(req.body)

})

app.listen(5000,()=>{
    console.log("server is running")
})