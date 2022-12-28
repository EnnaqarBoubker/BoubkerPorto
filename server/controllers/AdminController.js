/**
 * method => get
 * URL => /api/user/admin/me
 * access => Private
 */

const getUserAdmin = (req,res) =>{
    res.status(200).send('this is me Admin')
}






module.exports = {getUserAdmin}
