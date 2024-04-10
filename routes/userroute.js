const express = require('express');
const {getUsers, getUser, createUser, updateUser, deleteUser} = require("../controllers/usercontroller.js")
const router = express.Router();

//Setting routes for different function of users
router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser)

//exporting the modules
module.exports = router;