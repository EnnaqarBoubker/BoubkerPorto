const router = require('express').Router();

const {addComment, getAllComment, getCommentById, deleteComment} = require('../controllers/CommentController')

router.post('/addComment', addComment)
router.get('/getAllComment', getAllComment)
router.get('/getCommentById/:id', getCommentById)
router.delete('/deleteComment/:id', deleteComment)


module.exports = router