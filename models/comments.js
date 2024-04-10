const mongoose = require('mongoose');

const CommentSchema = mongoose.Schema(
    {
        product: {
            type: Number,
            required: true,
            default: 0
        },

        user: {
            type: Number,
            required: true,
            default: 0
        },

        rating: {
            type: Number,
            required: true,
            default: 0
        },

        images: {
            type: String,
            required: [true, "Enter Images"]
        },

        text: {
            type: String,
            required: [true, "Enter Text"]
        }
    },
    {
        timestamps: true 
    }
)

const Comment = mongoose.model("Comment", CommentSchema);
module.exports = Comment;