const {Router} = require('express')
const taskMethods = require('../Controllers/taskController.js')


const router = Router()

router.get('/task', async (req, res) => { 
    const tasks = await taskMethods.index()
    res.send(tasks)
})

router.get('/task/:name', async (req, res) =>{
    const taskName = req.params.name 
    const task = await taskMethods.show(taskName)
    res.send(task)  
} )

module.exports = router
