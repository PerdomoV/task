require('../database/database.js')
const Task = require('../Models/taskModel.js')

module.exports = {
    index: async (req, res) => {
        const tasks = await Task.find()
        res.json(tasks)
    },
    create: async function(req, res){
        const {name, description} = req.body
        const task = new Task({name: name, description: description, user: req.user._id})
        const saveResponse = await task.save()
        res.json(saveResponse)
    },
    show: async (req, res) => {
        const _id  = req.params.id
        const task = await Task.findOne({_id: _id})
        res.json(task)
    },
    update: async (req, res) => {
        const id = req.params.id
        const {_id, name, description} = req.body
        const taskUpdated = await Task.updateOne({_id: id}, 
            {name: name, description: description})
        res.json(taskUpdated)
    },
    destroy: async (req, res) => {
        const id = req.params.id
        const taskDeleted = await Task.deleteOne({_id: id})
        res.json(taskDeleted)
    }

}

/*
function create(){
    //creates a new model
}

function store(){
    //saves a new resource from the model
}

function show(){
    //shows an specific resource 
}

function edit(){
    //show the form of editing a resource
}

function update(){
    //updates the specific resource on the database
}

function destroy(){
    //Erases a specific resource from database
}*/