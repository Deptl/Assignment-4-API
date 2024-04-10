const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please provide a product name"],
        },

        description: {
            type: String,
            required: [true, "Please provide a product's description"]
        },

        image: {
            type: String,
            required: [true, "Enter Images"]
        },

        price: {
            type: Number,
            required: true,
            default: 0
        },

        shippingcost: {
            type: Number,
            required: true,
            default: 0
        }
    },
    {
        timestamps: true 
    }
)

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;