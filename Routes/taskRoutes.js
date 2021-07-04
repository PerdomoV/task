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

router.post('/task', async (req, res) => {
    const name = req.body.name
    const desc = req.body.description
    const date = req.body.date
    const saveResponse = await taskMethods.create(name, desc, date)
    res.json(saveResponse)
})

router.put('/task/:name', async (req, res) => {
    const nombre_previo = req.params.name
    const name = req.body.name
    const desc = req.body.description
    const date = req.body.date
    const saveResponse = await taskMethods.update(nombre_previo, name, desc, date)
    res.json(saveResponse)
})

module.exports = router
