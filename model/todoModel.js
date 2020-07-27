const mongoose = require('mongoose')
require('dotenv').config()

// Connect to Mongodb
const url = process.env.URL
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

// Set up MODEL - Mongoose
const Schema = mongoose.Schema

const todoSchema = new Schema({
    title: {
        type: String,
    },
    done: {
        type: Boolean,
    }
})

const Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo