const mongoose = require('mongoose');

const UserSchema = mongoose.Schema(
    {
        email: {
            type: String,
            required: [true, "Please provide a email"],
        },

        password: {
            type: String,
            required: [true, "Please provide a password"]
        },

        username: {
            type: String,
            required: [true, "Enter Username"]
        },

        purchasehistory: {
            type: Number,
            required: true,
            default: 0
        },

        shippingaddress: {
            type: String,
            required: [true, "Please provide an address"]
        }
    },
    {
        timestamps: true 
    }
)

const User = mongoose.model("User", UserSchema);
module.exports = User;