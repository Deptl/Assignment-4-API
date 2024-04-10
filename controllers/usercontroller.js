const User = require('../models/user.js');

//function for getting users
const getUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

//function for getting user by id
const getUser = async (req, res) => {
    try {
        const {id} = req.params; 
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

//function for creating user
const createUser = async (req, res) =>{
    try {
        const user = await User.create(req.body);
        if(!user){
            return res.status(404).json({message: "User already exist"});
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

//function for updating user
const updateUser = async (req, res) =>{
    try {
        const {id} = req.params; 
        const user = await User.findByIdAndUpdate(id, req.body);
        if(!user){
            return res.status(404).json({message: "No user with this id"});
        }
        const updateduser = await User.findById(id);
        res.status(200).json(updateduser);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

//function for dleting user
const deleteUser = async (req, res) => {
    try {
        const {id} = req.params;
        const user = await User.findByIdAndDelete(id);
        if(!user){
            return res.status(404).json('No User with this id');
        }
        res.status(200).json({message:'User Deleted Successfully'})
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

//exporting all functions for user
module.exports = {
    getUsers,
    getUser,
    createUser, 
    updateUser,
    deleteUser
}