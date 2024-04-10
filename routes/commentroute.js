const express = require('express');
const {getComments, getComment, createComment, updateComment, deleteComment} = require("../controllers/commentcontroller.js")
const router = express.Router();

//Setting routes for different function of comments
router.get('/', getComments);
router.get('/:id', getComment);
router.post('/', createComment);
router.put('/:id', updateComment);
router.delete('/:id', deleteComment);

//exporting the modules
module.exports = router;