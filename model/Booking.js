const mongoose = require("mongoose")
const bookSchema = new mongoose.Schema({
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "customers"
    },
    itemId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "buses"
    },
    date: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }

})
const Book = mongoose.model("books", bookSchema);

module.exports = Book;