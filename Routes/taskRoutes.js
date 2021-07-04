const {Router} = require('express')
const taskMethods = require('../Controllers/taskController.js')


const router = Router()

router.get('/task', async (req, res) => { 
    const tasks = await taskMethods.index()
    res.send(tasks)
})

router.get('/task/:id', async (req, res) =>{
    const taskId = req.params.id 
    const task = await taskMethods.show(taskId)
    res.send(task)  
} )

router.post('/task', async (req, res) => {
    const name = req.body.name
    const desc = req.body.description
    const date = req.body.date
    const saveResponse = await taskMethods.create(name, desc, date)
    res.json(saveResponse)
})

router.put('/task/:id', async (req, res) => {
    const taskId = req.params.id
    const name = req.body.name
    const desc = req.body.description
    const date = req.body.date
    const saveResponse = await taskMethods.update(taskId, name, desc, date)
    res.json(saveResponse)
})

router.delete('/task/:id', async (req, res) => {
    const taskId = req.params.id
    const deleteResponse = await taskMethods.destroy(taskId)
    res.json(deleteResponse)
})

module.exports = router
