// import expess from ('express')
const express = require('express')
const path = require('path')
// import mongoose from 'mongoose';
const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017",{
    dbName:"init"
}).then(()=>{
    console.log('database Connected')
}).catch((e)=>{
    console.log(e)
});

const messegeScheme = mongoose.Schema({
    name:String,
    email: String

})

const message = mongoose.model("message",messegeScheme )



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
    res.render("success")
})

app.post('/',(req,res)=>{
    users.push({userName:req.body.name, email: req.body.email})
    res.render("success.ejs")
    console.log(req.body)

})

app.get('/users',(req,res)=>{
    res.json({
        users,
    })

})

app.get('/add', async(req,res)=>{
    await message.create({name:"rajjo",
email:'ahah2@JAJ'})
    res.send("NICE")
})


app.post

app.listen(5000,()=>{
    console.log("server is running")
})