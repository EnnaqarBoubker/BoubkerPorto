const ProjectModel = require('../models/ProjectModel')
const asyncHandler = require('express-async-handler')
// const ErrorHandler = require('../utils/tryCatch')

/**
 * @access : private
 * @Route : /api/project/addProject
 */

const addProject = asyncHandler(async (req, res, next) => {
    const { title, techno, description } = req.body

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
    // const image = req.files.file
    const id = req.params.id
 console.log('ibioooooo');
//  if (!req.files || Object.keys(req.files).length === 0) {
//     return res.status(400).send('No files were uploaded.');
//   }
    // if (!title || !description || !techno) {
    //     res.status(400)
    //     throw new Error('Please Add All fildes')
    // }
    



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
            title: title,
            description: description,
            techno: techno,
        }, { new: true })

    console.log(proj);
    res.status(200).json({
        mess: 'update succefuly',
        proj
    })


})

/**
 * @access : private
 * @Route : /api/project/deleteProject/:id
 */

const deleteProject = asyncHandler(async (req, res, next) => {
    const id = req.params.id
    try {
        const proj = await ProjectModel.findByIdAndDelete({ _id: id })
        res.status(200).json({
            mess: 'delete succefuly',
            proj
        })
    } catch (error) {
        console.log(error);
    }
})




module.exports = { addProject, getAllProject, updateProject, getProjectById, deleteProject }
