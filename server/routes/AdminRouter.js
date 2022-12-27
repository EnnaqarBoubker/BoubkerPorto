const express = require('express');
const router = express.Router();

const {getUserAdmin} = require('../controllers/AdminController')
const protect = require('../middleware/authMiddleware')
const checkRoleManager = require('../middleware/checkRoleAdmin')

router.get('/admin/me', protect, getUserAdmin);



module.exports = router;