// import mongoose from "mongoose";
const mongoose = require('mongoose');


module.exports = (URI)=>{
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(()=> console.log(`established connection to the ${URI}`))
    .catch((e)=> console.log(`Something went wrong when connecting to the ${URI}`, e))
}

