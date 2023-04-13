import BookController from "../controllers/BookController"
import express from "express"

const router = express.Router()


router.get('/', BookController.getBooks)

