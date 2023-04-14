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

// const Book = mongoose.model('Book', BookSchema);
// export default {Book}

module.exports = mongoose.model('Book', BookSchema)