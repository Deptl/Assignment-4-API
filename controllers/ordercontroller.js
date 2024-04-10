const Order = require('../models/order.js');

//function for getting orders
const getOrders = async (req, res) => {
    try {
        const orders = await Order.find({});
        res.status(200).json(orders)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

//function for getting order by specific id
const getOrder = async (req, res) => {
    try {
        const {id} = req.params; 
        const order = await Order.findById(id);
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

//function for creating order
const createOrder = async (req, res) =>{
    try {
        const order = await Order.create(req.body);
        if(!order){
            return res.status(404).json({message: "Order already exist"});
        }
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

//function for updating order
const updateOrder = async (req, res) =>{
    try {
        const {id} = req.params; 
        const order = await Order.findByIdAndUpdate(id, req.body);
        if(!order){
            return res.status(404).json({message: "No order with this id"});
        }
        const updatedorder = await Order.findById(id);
        res.status(200).json(updatedorder);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}


//function for deleting order
const deleteOrder = async (req, res) => {
    try {
        const {id} = req.params;
        const order = await Order.findByIdAndDelete(id);
        if(!order){
            return res.status(404).json('No order with this id');
        }
        res.status(200).json({message:'Order Deleted Successfully'})
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

//exporting all functions of order
module.exports = {
    getOrders,
    getOrder,
    createOrder, 
    updateOrder,
    deleteOrder
}