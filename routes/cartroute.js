const express = require('express')
const { getCarts, getCart, postCart, updateCart, deleteCart } = require('../controllers/cartcontroller.js')
const router = express.Router();

//Setting routes for different function of carts
router.get('/', getCarts);
router.get('/:id', getCart);
router.post('/', postCart);
router.put('/:id', updateCart);
router.delete('/:id', deleteCart)

//exporting the modules
module.exports = router;