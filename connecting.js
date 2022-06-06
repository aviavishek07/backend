const mongoose = require('mongoose');

const DB = process.env.collection
mongoose.connect(DB,()=>{

    try {

        console.log("connecting to database success");
        
    } catch (error) {
        console.log(err);
        
    }
})