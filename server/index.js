// import express from "express"
// import mongoose from "mongoose"
// import dotenv from "dotenv"
// import {router} from "./routes/BooksRoutes.js"

const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const router = require('./routes/BooksRoutes.js')


const app = express()
app.use(express.json())
dotenv.config()

app.listen(process.env.PORT, () => console.log('app running on port ', process.env.PORT))
mongoose.connect(process.env.CONNECTION)
.then(() => console.log('database connected'))

app.use('/', router)


