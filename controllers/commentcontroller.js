const Comment = require('../models/comments.js');

//Function for getting Comments
const getComments = async (req, res) => {
    try {
        const comment = await Comment.find({});
        res.status(200).json(comment)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

//Function for getting comments by Id
const getComment = async (req, res) => {
    try {
        const {id} = req.params; 
        const comment = await Comment.findById(id);
        res.status(200).json(comment);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

//Function for creating comments
const createComment = async (req, res) =>{
    try {
        const comment = await Comment.create(req.body);
        if(!comment){
            return res.status(404).json({message: "Comment already exist"});
        }
        res.status(200).json(comment);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

//Function for updating comments
const updateComment = async (req, res) =>{
    try {
        const {id} = req.params; 
        const comment = await Comment.findByIdAndUpdate(id, req.body);
        if(!comment){
            return res.status(404).json({message: "No comment with this id"});
        }
        const updatedcomment = await Comment.findById(id);
        res.status(200).json(updatedcomment);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

//Function for deleting comments
const deleteComment = async (req, res) => {
    try {
        const {id} = req.params;
        const comment = await Comment.findByIdAndDelete(id);
        if(!comment){
            return res.status(404).json('No comment with this id');
        }
        res.status(200).json({message:'Comment Deleted Successfully'})
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

//exporting all comments functions 
module.exports = {
    getComments,
    getComment,
    createComment, 
    updateComment,
    deleteComment
}