import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import BooksRoutes from "./routes/BooksRoutes"


const app = express()
app.use(express.json())
dotenv.config()

app.listen(process.env.PORT, () => console.log('app running on port ', process.env.PORT))
mongoose.connect(process.env.CONNECTION)
.then(() => console.log('database connected'))

app.use('/', BooksRoutes)


