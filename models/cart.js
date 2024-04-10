const mongoose = require('mongoose');

const CartSchema = mongoose.Schema(
    {
        products: {
            type: Number,
            required: true,
            default: 0
        },

        quantities: {
            type: Number,
            required: true,
            default: 0
        },

        user: {
            type: Number,
            required: true,
            default: 0
        }
    },
    {
        timestamps: true 
    }
)

const Cart = mongoose.model("Cart", CartSchema);
module.exports = Cart;