const ProjectModel = require('../models/ProjectModel')
const asyncHandler = require('express-async-handler')
// const ErrorHandler = require('../utils/tryCatch')

/**
 * @access : private
 * @Route : /api/project/addProject
 */

const addProject = asyncHandler(async (req, res, next) => {
    const { title, techno, description } = req.body
    if (!title || !techno || !description || !req.files) {
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
        const proj = await ProjectModel.create({
            image: img,
            title: title,
            techno: techno,
            description: description
        })
        res.status(201).json({
            mess: 'create successfuly',
            proj
        })
    } catch (err) {
        console.log(err);
    }
})

/**
 * @access : private
 * @Route : /api/project/getAllProject
 */

const getAllProject = asyncHandler(async (req, res, next) => {
    try {
        const proj = await ProjectModel.find({})
        res.status(200).json({ proj })
    } catch (error) {
        res.status(404).json({ mess: 'not found' })
    }
})

/**
 * @access : private
 * @Route : /api/project/getProjectById/:id
 */

const getProjectById = asyncHandler(async (req, res, next) => {
    const id = req.params.id
    try {
        const proj = await ProjectModel.findOne({ _id: id })
        console.log(proj);
        res.status(200).json({
            proj
        })
    } catch (error) {
        console.log(error);
    }
})

/**
 * @access : private
 * @Route : /api/project/updateProject/:id
 */

const updateProject = asyncHandler(async (req, res, next) => {
    const { title, description, techno } = req.body
    const id = req.params.id

    if (!title || !description || !techno || !req.files) {
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

    const proj = await ProjectModel.findByIdAndUpdate(
        {
            _id: id
        },
        {
            image: img,
            title: title,
            description: description,
            techno: techno,
        }, { new: true })

    console.log(proj);
    if (proj) {
        res.status(200).json({
            mess: 'update successfuly',
            proj
        })
    } else {
        res.status(404)
        throw new Error('not found')
    }


})

/**
 * @access : private
 * @Route : /api/project/deleteProject/:id
 */

const deleteProject = asyncHandler(async (req, res, next) => {
    const id = req.params.id
    
        const proj = await ProjectModel.findByIdAndDelete({ _id: id })
        if(!proj){
            res.status(404)
            throw new Error('not found')
        }
        
        res.status(200).json({
            mess: 'delete succefuly',
            proj
        })
    
})




module.exports = { addProject, getAllProject, updateProject, getProjectById, deleteProject }
