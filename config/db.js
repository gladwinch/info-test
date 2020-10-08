const mongoose = require('mongoose')
const keys = require('./keys')

const connectDB = async () => {
    const conn = await mongoose.connect(keys.mongoURI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })

    console.log(`MongoDB Connected: ${conn.connection.host.cyan}`)
}

module.exports = connectDB