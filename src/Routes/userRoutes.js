const {Router} = require("express")
const userController = require("../Controllers/userController.js")


const router = Router()
const auth = require('../Middlewares/authorization.js')
//router.use(Router.json())

router.use(auth.authenticateToken)

router.get('/user', userController.show)
//router.put('/user', userController.update)

module.exports = router


