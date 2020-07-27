const Todo = require('../model/todoModel')

// Set up CONTROLLER (CRUD)
// https://mongoosejs.com/docs/models.html
class TodoRepository {
    constructor(model) {
        this.model = model
    }

    create = function (title) {
        const newTodo = { title, done: false }

        const todo = new this.model(newTodo) //this.model = Todo

        // Additional Logic

        return todo.save()
    }

    findAll = function () {
        return this.model.find()
    }

    updateById = function (id, todo) {
        return this.model.findOneAndUpdate({ _id: id }, { $set: { title: todo.title, done: todo.done } })
    }

    deleteById = function (id) {
        return this.model.findByIdAndDelete(id)
    }

}

module.exports = new TodoRepository(Todo) // exporting TodoController