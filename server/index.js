
const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const router = require('./routes/BooksRoutes')


const app = express()
app.use(express.json())
dotenv.config()

app.listen(process.env.PORT, () => console.log('app running on port ', process.env.PORT))
mongoose.connect(process.env.CONNECTION)
.then(() => console.log('database connected'))

// app.use('/', router)