const {Router} = require('express')
const taskMethods = require('../Controllers/taskController.js')
const authorizationMiddleware = require('../Middlewares/authorization.js')


const router = Router()
router.use(authorizationMiddleware.authenticateToken)

router.get('/task', authorizationMiddleware.checkTaskAuthor, taskMethods.index)

router.get('/task/:id', authorizationMiddleware.checkTaskAuthor , taskMethods.show)

router.post('/task', taskMethods.create)

router.put('/task/:id', authorizationMiddleware.checkTaskAuthor ,taskMethods.update)

router.delete('/task/:id', authorizationMiddleware.checkTaskAuthor, taskMethods.destroy)


module.exports = router
