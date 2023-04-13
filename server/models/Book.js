import mongoose from "mongoose"

const BookSchema = new mongoose.Schema({
    name: {
        type: String
    },
    author: {
        type: String
    },
    nb_pages:{
        type: Number
    }
})

module.exports = mongoose.model('Book', BookSchema)
