// import expess from ('express')
const express = require('express')
const path = require('path')
// import mongoose from 'mongoose';
const mongoose = require("mongoose")
const co

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

    res.render("login.ejs")
    // res.json({
    //     sucess:true,
    //     product:[]
    // })
})

app.get("/",(req,res)=>{
    console.log(req.cookies)
    res.render("login")
})


app.post("/login",(req,res)=>{
    res.cookie("token","i am in",{
        httpOnly:true,expires:new Date(Date.now()+60*1000),
    });
    res.redirect('/');
} )



app.get('/success',(req,res)=>{
    res.render("success.ejs")
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
    // const{ name,email} = req.body;
    await message.create({name:"riee", email:"kk@12",})
    res.send("NICE")
})


app.post ('/contact', async(req,res)=>{

    const userData = {name:req.body.name, email: req.body.email}
    console.log(userData)
     await message.create(userData)

    // const{ name,email} = req.body;

    // await message.create({name,email})
    res.redirect('/success')

})

app.listen(5000,()=>{
    console.log("server is running")
})