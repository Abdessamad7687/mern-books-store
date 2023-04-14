const express = require('express')

const router = express.Router()

const BookController = require('../controllers/BookController')

router.get('/', BookController.getBooks)

export  {router} 