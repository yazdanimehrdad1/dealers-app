const customerController = require("../controllers/customer.controller")


module.exports = (app)=>{
    app.get('/api/customer/index', customerController.index),
    app.get('/api/customer', customerController.getAllCustomers),
    app.get('/api/customer/:id', customerController.getOneCustomer),
    app.delete('/api/customer/:id', customerController.deleteCustomer),
    app.post('/api/customer', customerController.createCustomer),
    app.put('/api/customer/:id', customerController.updateCustomer)
}