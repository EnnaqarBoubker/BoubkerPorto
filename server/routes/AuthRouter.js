const router = require('express').Router();

const {login, register, forgetPassword, resetPassword, virifierEmail} = require('../controllers/AuthController')


// router.get('/', test)

router.post('/login', login);
router.post('/register', register);
router.post('/forgetpassword', forgetPassword);
router.post('/resetpassword/:token', resetPassword)
router.get('/verifiemail/:token', virifierEmail)




module.exports = router;
