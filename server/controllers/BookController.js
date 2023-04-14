
const Book = require('../models/Book')


/* getting all Books */
const  getBooks = async (req, res) => {
    const books = await Book.Find({})
    res.status(200).json(books) 
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

/* exporting  */

module.exports.getBooks = getBooks
module.exports.getBook = getBook
module.exports.addBook = addBook
module.exports.updateBook = updateBook
module.exports.deleteBook = deleteBook

// export  {getBooks, getBook, addBook, updateBook, deleteBook }

