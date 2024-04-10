const Cart = require('../models/cart.js')

//Function for getting carts
const getCarts = async (req, res) => {
    try {
        const cart = await Cart.find({});
        res.status(200).json(cart)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

//Function for getting cart by specific Id
const getCart = async (req, res) => {
    try {
        const {id} = req.params; 
        const cart = await Cart.findById(id);
        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

//Function for creating Cart
const postCart = async (req, res) => {
    try {
        const cart = await Cart.create(req.body);
        if(!cart){
            return res.status(404).json({message: "Cart Already Exist"});
        }
        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

//Function for updating Cart
const updateCart = async (req, res) => {
    try {
        const {id} = req.params; 
        const cart = await Cart.findByIdAndUpdate(id, req.body);
        if(!cart){
            return res.status(404).json({message: "No cart with this id"});
        }
        const updatedCart = await Cart.findById(id);
        res.status(200).json(updatedCart);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

//Function for deleting Cart
const deleteCart = async (req, res) => {
    try {
        const {id} = req.params;
        const cart = await Cart.findByIdAndDelete(id);
        if(!cart){
            return res.status(404).json('No cart with this id');
        }
        res.status(200).json({message:'Cart Deleted Successfully'})
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

//Exporting all Cart functions
module.exports = {
    getCarts, 
    getCart,
    postCart,
    updateCart,
    deleteCart
}
