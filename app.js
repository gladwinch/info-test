const express = require('express')
const path = require('path')
const colors = require('colors')
const connectDB = require('./config/db')
const mongoose = require('mongoose')
const errorHandler = require('./middleware/error')

// Connect to database
connectDB()

let app = express()
app.use(express.json())

// Define Routes
app.use('/api/farmer', require('./routes/api/farmer'))
app.use('/api/language', require('./routes/api/language'))

app.use(errorHandler)

// Set static folder
app.use(express.static('build'))

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
})

const PORT = process.env.PORT || 5000

const server = app.listen(
    PORT,
    console.log(`Server is running on port ${PORT}`)
) 

//Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red)
    
    //close server and exit process
    // server.close(() => process.exit(1))
})