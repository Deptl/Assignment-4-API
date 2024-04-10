const Product = require('../models/product.js');

//Function for getting products
const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

//function for getting product by id
const getProduct = async (req, res) => {
    try {
        const {id} = req.params; 
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

//function for creating product
const createProduct = async (req, res) =>{
    try {
        const product = await Product.create(req.body);
        if(!product){
            return res.status(404).json({message: "Product already exist"});
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

//function for updating a product
const updateProduct = async (req, res) =>{
    try {
        const {id} = req.params; 
        const product = await Product.findByIdAndUpdate(id, req.body);
        if(!product){
            return res.status(404).json({message: "No product with this id"});
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

//function for deleting product
const deleteProduct = async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        if(!product){
            return res.status(404).json('No product with this id');
        }
        res.status(200).json({message:'Product Deleted Successfully'})
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

//exporting all product functions
module.exports = {
    getProducts,
    getProduct,
    createProduct, 
    updateProduct,
    deleteProduct
}