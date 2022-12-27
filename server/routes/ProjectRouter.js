const express = require('express');
const router = express.Router();
const {addProject, getAllProject, updateProject, getProjectById, deleteProject} = require('../controllers/ProjectController')
const {upload} = require('../middleware/multer')

router.post('/addProject',upload, addProject)
router.get('/getAllProject', getAllProject)
router.get('/getProjectById/:id', getProjectById)
router.put('/updateProject/:id', updateProject)
router.delete('/deleteProject/:id', deleteProject)




module.exports = router