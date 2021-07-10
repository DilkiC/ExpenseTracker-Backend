const express = require('express');
//const User = require('../model/User');
const userModel=require("../model/User");
const router=express.Router();

/* app.get('/', function (req, res) {
    res.send('hello')
  }) */


router.get("/getAllUsers", async(req,res)=>{
  const getAllUsers=await userModel.find();
  res.send({data:getAllUsers});
});

router.post("/addUser",async(req,res)=>{
  const data=await userModel.create(req.body);
    res.send(data)
});

 router.get("/getOneUser/:password", async(req,res)=>{
  try{
    const getOneUser=await userModel.findOne(req.params);
    res.send({data:getOneUser});
  }catch{
    res.status(404).send({error:"user not found"});
  }
});
 

router.patch("/updateUser/:password",async(req,res)=>{
  try{
  const updateUser=await userModel.findOne(req.params);
  Object.assign(updateUser,req.body);
  updateUser.save();
  res.send({data:updateUser});
  }catch{
    res.status(404).send({error:"user not found"});
  }
});


router.delete("/deleteUser/:password",async(req,res)=>{
  try{
    const deleteUser=await userModel.findOne(req.params);
    await deleteUser.remove();
    res.send({data:true});
  }catch{
    res.status(404).send({error:"user not found"});
  }
});





module.exports=router;