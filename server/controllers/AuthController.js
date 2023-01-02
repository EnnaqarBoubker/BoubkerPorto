const UserModel = require('../models/UserModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const asyncHandler = require('express-async-handler')
// const ErrorHandler = require('../utils/tryCatch')
const sendEmail = require('../utils/sendEmail')
// const { tryCatch } = require('../utils/tryCatch');


/**
 * method => Post
 * URL => /api/auth/login
 * access => Public
 */

const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    const findUser = await UserModel.findOne({ email })
    if (!email || !password) {
        res.status(400)
        throw new Error('please add all fields')
    }

    if (findUser && (await bcrypt.compare(password, findUser.password))) {
        if(findUser.isVerified == false){
           res.status(400)
           throw new Error("your email is not validated")
        }

        //* create token 
        const token = generateToken(findUser.id)
        //* store token in cookie 
        res.cookie('access-token', token)
        res.status(200).json({
            id: findUser.id,
            name: findUser.name,
            email: findUser.email,
            token: token ,
            role : findUser.role,
            message: 'logged in succefully',
          })
    } else {
        res.status(400)
        throw new Error('Opps!! Email or Password is not correct')
    }
})


/**
 * method => Post
 * URL => /api/auth/register
 * access => Public
 */
const register = asyncHandler(async (req, res) => {
    const { name, email, password, password2 } = req.body

    if (!name || !email || !password || !password2) {
        res.status(400)
        throw new Error('please add all fields')
    }else if(password != password2){
        res.status(400)
        throw new Error('Password not match')
    }
    //* check if user exist
    const userExist = await UserModel.findOne({ email })
    if (userExist) {
        res.status(400)
        throw new Error('Opps!! Email has been already taken')
    }

    //* hash password
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password, salt);

    //* create User 
    const user = await UserModel.create({
        name,
        email,
        password: hashPassword,
        ValidateToken: crypto.randomBytes(64).toString('hex')
    })

    const subject = 'Virefier email'
    const url = `<h2 >Please click Her For validate Your Email <a href="http://localhost:8080/api/auth/verifiemail/${user.ValidateToken}">validation</a></h2>`

    sendEmail(user.email, user.ValidateToken , subject, url)

    if (user) {
        res.status(201).send('User succussefuly, Please check your Email')

    } else {
        res.status(400)
        throw new Error('Invalide user data')
    }
})


/**
 * @method : Post
 * @URL : /api/auth/forgetpassword
 * @access : Public
 */

const forgetPassword = asyncHandler(async (req, res) => {
    
    const {email} = req.body
    if(!email){
        res.status(400)
        throw new Error('Please add your Email')
    }
    const user = await UserModel.findOne({email})
    if(!user){
        res.status(400)
        throw new Error('Email not found')
    }
    //create token
    const token = generateToken(user.id)
    console.log(token);

    const subject = 'Reset Password'
    const url = `<h2 >Please click Her For validate Your Email <a href="http://localhost:3000/resetPassword/${token}">Reset Your Password</a></h2>`
    sendEmail(user.email, token, subject, url)

    res.status(200).json({mess : 'Re-send the password, please check your email'})

})

/**
 * method => Post
 * URL => /api/auth/resetpassword/:token
 * access => Public
 */
const resetPassword = asyncHandler(async (req, res) => {
    const {password,password2} = req.body
    if (!password || !password2) {
        res.status(400)
        throw new Error('please Enter New password')
    }else if(password != password2){
        res.status(400)
        throw new Error('Password not match')
    }
    const token = req.params.token
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt)
    
    const tokene = await jwt.verify(token, process.env.JWT_SECRET)

    await UserModel.findOneAndUpdate(
        {_id :tokene.id},
        {password : hashPassword}
    )                                                                 

    res.status(200).json({mess : 'password has update successfuly'})
    
})


//* verifier Email function 

const virifierEmail = asyncHandler(async (req, res) => {
    const token = req.params.token;
    console.log(token)
    const user = await UserModel.findOne({ ValidateToken : token });
    if (user) {
        user.ValidateToken = null,
        user.isVerified = true,
        await user.save()
        res.status(201).send('Validation Saccssefuly')
    } else {
        console.log("something went wrong in validation email");
    }
})

//* function for generate JWT

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '1d'
    })
}


module.exports = {
    login,
    register,
    forgetPassword,
    resetPassword,
    virifierEmail
}



