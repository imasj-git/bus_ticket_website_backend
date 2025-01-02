const { string } = require("joi");
const mongoose = require("mongoose")
const paymentSchema = new mongoose.Schema({
    bookingId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "bookings"
    },
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "customers"
    },

    amount: {
        type: Integer,
        required: true
    },
    maymentmethod: {
        type: String,
        required: true
    },
    paymentstatus: {
        type: Integer,
        required: true
    },
    paidat: {
        type: Date,
        required: true
    }


})
const Payment = mongoose.model("payments", paymentSchema);

module.exports = Payment;