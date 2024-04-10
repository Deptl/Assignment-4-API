const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema(
    {
        recordingofsale: {
            type: Number,
            required: true,
            default: 0
        }
    },
    {
        timestamps: true 
    }
)

const Order = mongoose.model("Order", OrderSchema);
module.exports = Order;