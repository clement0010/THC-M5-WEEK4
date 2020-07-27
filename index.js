// Import/require libraries
const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const TodoRoute = require('./routes/todoRoutes')
require('dotenv').config()

const app = express()

// statement/conditions ? true case : false case
const port = process.env.PORT ? process.env.PORT : 3000

// if process.env.PORT is present (TRUE), process.env.PORT 
// else (FALSE) use 3000

// Use Express Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(logger('dev'))
app.use(cors())

app.use('/api', TodoRoute)

// Handle production
if (process.env.NODE_ENV === 'production') {
    // static folder
    app.use(express.static(__dirname + '/public'))

    // Handle SPA (Vue Frontend)
    app.get('/.*/', (req, res) => {
        res.sendFile(__dirname + 'public/index.html')
    })
}

// Set up server
app.listen(port, function () {
    console.log(`Server is listening at port ${port}`)
})