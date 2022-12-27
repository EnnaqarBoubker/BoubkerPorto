require('dotenv').config()
const express = require('express')
const app = express()

const cors = require('cors');
app.use(cors({origin: true, credentials: true}));
const { ErrorHandler } = require('./middleware/ErrorHandler')
const connectDb = require('./config/db')
connectDb()

const coockieparser = require('cookie-parser')

app.use(express.urlencoded({ extended: true })); //* this is meddleware
app.use(coockieparser())
app.use(express.json()); //* this is meddleware
app.use(express.static('uploads'))


//* import Routes
const RouterAuth = require('./routes/AuthRouter')
const AdminRouter = require('./routes/AdminRouter');
const ProjectRouter = require('./routes/ProjectRouter')
const { tryCatch } = require('./utils/tryCatch');



//* Routes middlewares
app.use('/api/auth', RouterAuth)
app.use('/api/user', AdminRouter)
app.use('/api/project', ProjectRouter)


app.use(ErrorHandler)


const port = process.env.PORT || 3000
app.listen(port, (err) => {
    if (!err) {
        console.log(`the port ${port} is running`)
    } else {
        console.log(err)
    }
})

module.exports = app;
