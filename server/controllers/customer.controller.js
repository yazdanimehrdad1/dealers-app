const { process_params } = require('express/lib/router')
const Customer = require('../models/customer.model')


const customerController = {
    index:(req,res)=>{
        console.log("index")
        res.json({message: "customer backend is running"})
    },

    getAllCustomers: async (req, res)=>{
        console.log("get all customer controller")
        try{
            const customers = await Customer.find({})
            console.log(customers)
            return(res.json(customers))
        }
        catch(error){
            return res.status(400).json({message: error.message})
        }
    },

    getOneCustomer: async (req,res)=>{
        console.log(req.params)
        try {
            oneCustomer = await Customer.findById({_id: req.params.id})
            return(res.json(oneCustomer))
            
        } catch (error) {
            return res.status(400).json({message: error.message})
        }
    },

    createCustomer: async (req, res)=>{
        console.log("createCustomer")
        console.log("request in createCustomer", req.body)
        const {firstName, lastName, email, role } = req.body
        
        // const customer = await Customer.findOne({customerId:customerId})

        // if(customer){
        //     return res.status(400).json({message:"the customer already exist"})
        // }

        try{
            
            const newCustomer = new Customer({
                firstName,
                lastName,
                email,
                role
            })

            await newCustomer.save()

            return res.json({message: "New customer was added"})
        
        }catch(error){
            // res.status(400).json({message: error.errors.message})
            // console.log(error.errors.message)
            return res.status(400).json(error)
        }
    },

    deleteCustomer:async (req, res)=>{
        try {
            await Customer.findByIdAndDelete(req.params.id)
            return res.json({message:"customer was deleted"})
        } catch (error) {
            return res.status(400).json({message: error.message})
        }
    },

    updateCustomer: async(req,res)=>{
        const {firstName, lastName, email} = req.body

        try {
            // if(!firstName || !lastName || !email){
            //     return res.status(400).json({message: "First name, Lastname, and email are required!"})
            // }
            
            await Customer.findByIdAndUpdate(req.params.id, {
                firstName,
                lastName,
                email
            })
            res.json({message: "Customer info was updated"})
        } catch (error) {
            return res.status(400).json(error)
        }
    }
}

module.exports =customerController