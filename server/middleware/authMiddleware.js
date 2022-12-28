const jwt = require('jsonwebtoken');
const cookie = require('cookie-parser');
const asyncHandler = require('express-async-handler')


const loginRequired = asyncHandler( async (req, res, next) => {
    const token = req.cookies['access-token']
    console.log(token);
    
    if (token) {
        const validateToken = await jwt.verify(token, process.env.JWT_SECRET)
        if (validateToken) {
            res.user = validateToken.id
            console.log(res.user);
            next()
        }
    }else{
        console.error('token is not found')
        res.status(400).send({
            message: "login first"
        })
    }

})

module.exports = loginRequired