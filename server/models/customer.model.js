const mongoose = require("mongoose")

const customerSchema = new mongoose.Schema({
    // customerId:{
    //     type:String,
    //     unique: true,
    //     trim:true,
        
    //     required: [true, "customer ID  is required"],
    //     minlength: [6, "customer ID must be greater than 6 characters"],
    // },
    firstName: {
        type: String,
        required: [true, "First name is required"],
        minlength: [4, "First name must be greater than 4 characters"],
        trim:true,
  
    },
    lastName: {
        type: String,
        required: [true, "Last name is required"],
        minlength: [4, "Last name must be greater than 4 characters"],
        trim:true,
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique:[true, "email must be unique"],
        validate: {
        //val is what is comming from the email field(user submitted value)
        validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
        message: "Please enter a valid email"
        }
    },
    role:{
        type:Number,
        default:0
    },
},{timestamps:true})

module.exports = mongoose.model("customer", customerSchema)