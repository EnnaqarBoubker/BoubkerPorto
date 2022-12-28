const CommentModel = require('../models/CommentModel')
const asyncHandler = require('express-async-handler')


/**
 * @access : private
 * @Route : /api/comment/addComment
 */

const addComment = asyncHandler(async (req, res, next) => {
    const { name, email, comment } = req.body
    if (!name || !email || !comment) {
        res.status(400)
        throw new Error('Please Add All fildes')
    }
    try {
        const comments = await CommentModel.create({
            name: name,
            email: email,
            comment: comment
        })
        if(!comments){
            res.status(400)
            throw new Error('comment not created')
        }
        res.status(201).json({
            mess: 'create successfuly',
            comments
        })
    } catch (err) {
        console.log(err);
    }
})

/**
 * @access : private
 * @Route : /api/comment/getAllComment
 */
const getAllComment = asyncHandler(async (req, res, next) => {
    try {
        const comment = await CommentModel.find({})
        res.status(200).json({ comment })
    } catch (error) {
        res.status(404).json({ mess: 'not found' })
    }
})


/**
 * @access : private
 * @Route : /api/comment/getCommentById/:id
 */
const getCommentById = asyncHandler(async (req, res, next) => {
    const id = req.params.id
    const comment = await CommentModel.findOne({ _id: id })
        if (!comment) {
            res.status(404)
            throw new Error('comment not found')
        }
        res.status(200).json({ comment })
})

/**
 * @access : private
 * @Route : /api/comment/deleteComment/:id
 */
const deleteComment = asyncHandler(async (req, res, next) => {
    const id = req.params.id
    const comment = await CommentModel.findOneAndDelete({_id: id})
    if (!comment) {
        res.status(404)
        throw new Error('comment not found')
    }
    res.status(200).json({ mess: 'delete successfuly' })

})




module.exports = {
    addComment,
    getAllComment,
    getCommentById,
    deleteComment
}