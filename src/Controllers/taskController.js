require('../database/database.js')
const Task = require('../Models/taskModel.js')

module.exports = {
    index: async function(){
        const tasks = await Task.find()
        return tasks
    },
    create: async function(nombre, descripcion, fecha){
        const task = new Task({name: nombre, description: descripcion, date: fecha})
        const saveResponse = await task.save()
        return saveResponse
    },
    show: async function(id){
        const task = await Task.findOne({_id: id})
        return task
    },
    update: async function(id, nombre, descripcion, fecha){
        //const task = await Task.findOne({name: nombre_previo})
        const taskUpdated = await Task.updateOne({_id: id}, 
            {name: nombre, description: descripcion, date: fecha})
        return taskUpdated
    },
    destroy: async function(id){
        const taskDeleted = await Task.deleteOne({_id: id})
        return taskDeleted
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