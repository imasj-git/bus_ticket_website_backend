const mongoose = require("mongoose")
const bookingSchema = new mongoose.Schema({
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "customers"
    },
    busId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "buses"
    },
    date: {
        type: String,
        required: true
    },
    travelDate: {
        type: String,
        required: true
    },
    seat: {
        type: String,
        required: true
    },
    amount: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }

})
const Books = mongoose.model("Books", orderSchema);

module.exports = Books;