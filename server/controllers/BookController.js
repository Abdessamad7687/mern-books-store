import Book from "../models/Book"

/* getting all Books */
const  getBooks = async (req, res) => {
    console.log('getting all books')
}

/* get single Book */
const getBook = async (req, res) => {
    console.log('getting single book')
}


/* add book */
const addBook = async (req, res) => {
    console.log('add book function')
}

/* update book */
const updateBook = async(req, res) => {
    console.log('updating book')
}

/* delete book */
const deleteBook = async(req, res) => {
    console.log('deleting book')
}

module.exports.addBook = addBook
module.exports.updateBook = updateBook
module.exports.deleteBook = deleteBook
module.exports.getBooks = getBooks
module.exports.getBook = getBook