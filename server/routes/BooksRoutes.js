import express from "express"

const router = express.Router()

import {getBooks, getBook, addBook, updateBook, deleteBook } from "../controllers/BookController"

router.get('/', getBooks)

export  {router} 