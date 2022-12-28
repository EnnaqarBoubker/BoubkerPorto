const BlogModel = require('../models/BlogsModel')
const asyncHandler = require('express-async-handler')
// const ErrorHandler = require('../utils/tryCatch')

/**
 * @access : private
 * @Route : /api/blog/addBlog
 */

const addBlog = asyncHandler(async (req, res, next) => {
    const { title, description } = req.body
    if (!title || !description || !req.files) {
        res.status(400)
        throw new Error('Please Add All fildes')
    }
        
    const img = [];
    await req.files.forEach((filePath) => {
        const path = filePath.path.split("\\")
        console.log(path);
        const imgPath = "/" + path[1];
        img.push(imgPath);
    });

    try {
        const blog = await BlogModel.create({
            image: img,
            title: title,
            description: description
        })
        res.status(201).json({
            mess: 'create successfuly',
            blog
        })
    } catch (err) {
        console.log(err);
    }
})

/**
 * @access : private
 * @Route : /api/Blog/getAllBlog
 */

const getAllBlog = asyncHandler(async (req, res, next) => {
    try {
        const blog = await BlogModel.find({})
        res.status(200).json({ blog })
    } catch (error) {
        res.status(404).json({ mess: 'not found' })
    }
})

/**
 * @access : private
 * @Route : /api/Blog/getBlogById/:id
 */

const getBlogById = asyncHandler(async (req, res, next) => {
    const id = req.params.id
    const blog = await BlogModel.findOne({ _id: id })
        if (!blog) {
            res.status(404)
            throw new Error('Blog not found')
        } 
        res.status(200).json({ blog })
})

/**
 * @access : private
 * @Route : /api/Blog/updateBlog/:id
 */

const updateBlog = asyncHandler(async (req, res, next) => {
    const { title, description } = req.body
    const id = req.params.id

    if (!title || !description || !req.files) {
        res.status(400)
        throw new Error('Please Add All fildes')
    }
    
    const img = [];
    console.log()
    await req.files.forEach((filePath) => {
        const path = filePath.path.split("\\")
        const imgPath = "/" + path[1]
        img.push(imgPath);
    });
    console.log("iamge", img)

    const blog = await BlogModel.findByIdAndUpdate(
        {
            _id: id
        },
        {
            image: img,
            title: title,
            description: description,
        }, { new: true })

    console.log(blog);
    if (!blog) {
        res.status(404)
        throw new Error('Blog not found')
    }
    res.status(200).json({
        mess: 'update succefuly',
        blog
    })


})

/**
 * @access : private
 * @Route : /api/Blog/deleteBlog/:id
 */

const deleteBlog = asyncHandler(async (req, res, next) => {
    const id = req.params.id
    try {
        const blog = await BlogModel.findByIdAndDelete({ _id: id })
        res.status(200).json({
            mess: 'delete succefuly',
            blog
        })
    } catch (error) {
        console.log(error);
    }
})




module.exports = { addBlog, getAllBlog, updateBlog, getBlogById, deleteBlog }
