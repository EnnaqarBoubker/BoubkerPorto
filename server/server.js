require('dotenv').config()
const express = require('express')
const app = express()
const connectDb = require('./config/db')
connectDb()






const port = process.env.PORT || 3000
app.listen(port, (err) => {
    if (!err) {
        console.log(`the port ${port} is running`)
    } else {
        console.log(err)
    }
})