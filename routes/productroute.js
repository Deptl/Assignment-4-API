const express = require('express');
const {getProducts, getProduct, createProduct, updateProduct, deleteProduct} = require("../controllers/productcontroller.js")
const router = express.Router();

//Setting routes for different function of product
router.get('/', getProducts);
router.get('/:id', getProduct);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct)

//exporting the modules
module.exports = router;