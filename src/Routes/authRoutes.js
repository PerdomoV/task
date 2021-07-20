const {Router} = require('express')
const User = require('../Models/userModel.js')
const authController = require('../Controllers/authController.js')

const router = Router()

router.post('/signup', authController.signUp)
router.post('/login', authController.signIn) 


// router.get('/users', async (req, res) => {
//     const usersList = await User.find()
//     res.json(usersList)
// })

module.exports = router



