// import express from 'express';
// import mongoose from 'mongoose'
// import cors from 'cors'
// import bodyParser from 'body-parser'
// import cookieParser from 'cookie-parser'
// import mongooseConfig from './config/mongoose.config.js'
require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const PORT = process.env.PORT || 8000



// setup express
const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({extended:true}))// for post request 
app.use(cookieParser())
app.use(cors({
    credentials:true,
    origin:"http://localhost:3000",
}))

//connect to DB
const URI = process.env.MONGODB_URL
console.log("MONGODB_URL",URI)
require('./config/mongoose.config')(URI)


//call routes
require('./routes/customer.routes')(app)

app.listen(PORT, ()=>{
    console.log(' server is running on port', PORT)
})