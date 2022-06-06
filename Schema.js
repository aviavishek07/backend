const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')


const student = new mongoose.Schema({

    name : {
        type : String,
        required : true
    },
    age : {
        type : Number,
        required : true
    },
    registration : {
        type : String,
        required : true
    },
    
    password : {
        type : String,
        required : true
    },
    confirm_pass : {
        type : String,
        required : true
    },
    
})
student.pre('save', async function(next) {
    if(this.isModified('password'))
    {   console.log(`the password is ${this.password}`)
        this.password= await bcrypt.hash(this.password,12);
       // this.confirm_pass=await bcrypt.hash(this.confirm_password,12);
        
    }
     next();
    })


const DataStudent = mongoose.model('StudentData',student)
module.exports=DataStudent