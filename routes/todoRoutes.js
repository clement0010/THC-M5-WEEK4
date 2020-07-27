const express = require('express')
const TodoControllers = require('../controllers/todoRepository')


// Express Router - Middleware
const app = express.Router()

// Set up our ROUTES (GET,POST,PUT,DELETE) - Express
app.post('/', async function (req, res) {

    try {
        const title = req.body.title
        // console.log("Request body", req.body)
        console.log("Todo Title:", title)

        const result = await TodoControllers.create(title) // result successful or result null/error
        console.log("result", result)

        // check result is valid
        if (result) {
            res.status(200).send(result)

        } else {
            res.status(500).send("Database error")
        }


    } catch (error) {
        console.log(error)
        res.status(500).send("Server internal error")
    }

})

app.get('/', async function (req, res) {

    try {

        const result = await TodoControllers.findAll()

        console.log("Result", result)

        if (result) {
            res.status(200).send(result)

        } else {
            res.status(500).send("Database error")
        }

    } catch (error) {
        console.log(error)
        res.status(500).send("Internal Error")
    }
})


app.put('/:id', async function (req, res) {
    try {
        const id = req.params.id
        const todo = req.body

        const result = await TodoControllers.updateById(id, todo)

        console.log("Id", id)
        console.log("todo", todo)

        res.send(result)

    } catch (error) {
        console.log(error);
        res.status(500).send("Internal error")
    }

})

app.delete('/:id', async function (req, res) {
    try {
        const { id } = req.params
        const result = await TodoControllers.deleteById(id)
        console.log("Delete", result);
        res.send(result)
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Error")
    }
})

module.exports = app