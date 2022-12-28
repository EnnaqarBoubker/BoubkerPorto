const express = require('express');
const router = express.Router();
const {addBlog, getAllBlog, updateBlog, getBlogById, deleteBlog} = require('../controllers/BlogsController')
const {upload} = require('../middleware/multer')

router.post('/addBlog',upload, addBlog)
router.get('/getAllBlog', getAllBlog)
router.get('/getBlogById/:id', getBlogById)
router.put('/updateBlog/:id', upload, updateBlog)
router.delete('/deleteBlog/:id', deleteBlog)




module.exports = router