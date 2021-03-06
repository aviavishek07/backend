const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose')

////////////////////////////////////////////////////////////////////////////////////////////////////
//require({path:'./dotenv'});
dotenv.config({path:'./dotenv/.env'})
const PORT = process.env.PORT
///////////////////////////////////////////////////////////////////////////////////////////////////
//const DataStudent = require('./model/Schema')
///////////////////////////////////////////////////////////////////////////////////////////////////
app.use(require('./routes/routes'))
app.use(express.json())
require('./model/connecting')
///////////////////////////////////////////////////////////////////////////////////////////////////
app.listen(PORT,()=>
{
    console.log("server is running");

})

