const {Router} = require('express')
const taskMethods = require('../Controllers/taskController.js')


const router = Router()

router.get('/task', taskMethods.index)

router.get('/task/:id', taskMethods.show)

router.post('/task', taskMethods.create)

router.put('/task/:id', taskMethods.update)

router.delete('/task/:id', taskMethods.destroy)


module.exports = router
