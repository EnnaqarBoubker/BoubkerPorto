const jwt = require('jsonwebtoken');
const cookie = require('cookie-parser');
const asyncHandler = require('express-async-handler')
const UserModel = require('../models/UserModel')




const checkRoleManager = asyncHandler( async (req, res, next) => {
    const token = req.cookies['access-token']
    
        const validateToken = await jwt.verify(token, process.env.JWT_SECRET)
        console.log(validateToken);
        const user = await UserModel.findOne({ _id: validateToken.id })
        
           console.log(user.role);
        const role = user.role
        if(role !== 'admin'){
            res.send('access denied')
        } 
        next()
    
})

module.exports = checkRoleManager
