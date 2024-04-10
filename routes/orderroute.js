const express = require('express');
const {getOrders, getOrder, createOrder, updateOrder, deleteOrder} = require("../controllers/ordercontroller.js")
const router = express.Router();

//Setting routes for different function of orders
router.get('/', getOrders);
router.get('/:id', getOrder);
router.post('/', createOrder);
router.put('/:id', updateOrder);
router.delete('/:id', deleteOrder)

//exporting the modules
module.exports = router;