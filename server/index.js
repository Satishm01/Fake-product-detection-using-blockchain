const express = require('express');

const mongoose =require('mongoose')
const cors=require("cors")
const ManufactureModel= require('./models/Mongodb')

const app = express();
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/employee");

app.post('/login',(req,res)=>{
  const {username,password}=req.body;
  ManufactureModel.findOne({username:username})
  .then(user=>{
    if(user){
      if(user.password==password){
      res.json("success")
      }
    else{
      res.json("the password is incorrect")
    }
  }else{
    res.json("No record existed")
  }
  })
})

app.post('/register',(req,res)=>{
    ManufactureModel.create(req.body)
    .then(employees=>res.json(employees))
    .catch(err => res.json(err))
})
app.listen(3001,()=>{
    console.log("server is running");
})

