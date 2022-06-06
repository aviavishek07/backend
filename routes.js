const express = require('express');
const { appendFile } = require('fs');
const route = express.Router();
const path = require('path')
const bcrypt = require('bcryptjs')

route.use(express.json());

route.get('/',(req,res)=>{
  
  //res.json({message:"this get is succesfull"});
  res.sendFile(path.join(__dirname,'../test.html'))
  
})




const DataStudent = require('../model/Schema')


route.post('/details',async(req,res)=>{

  const{name,age,registration,password,confirm_pass}=req.body;
 // try {
 if(name&&age&&registration&&password&&confirm_pass)
     
 {
  // const Hashpass=bcrypt.hash(password,4) 
   const Data = new DataStudent({name,age,registration,password ,confirm_pass});
  // console.log(password); 
   await Data.save();
    // console.log(Hashpass)
     
     return res.json({message:"student registered successfully"})

 // } catch (error) {
   // console.log("this is an error !!! server side");
    //return res.json({err:"message didn't received"})
    
  } else
  {
    return res.json({err:"Fill all datas"})
  }

})

module.exports=route;