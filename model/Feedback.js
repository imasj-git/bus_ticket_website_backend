const { string } = require("joi");
const mongoose = require("mongoose")
const feedbackSchema = new mongoose.Schema({
    busId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "buses"
    },
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "customers"
    },

    rating: {
        type: Integer,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    submittedat: {
        type: Integer,
        required: true
    }



})
const Feedback = mongoose.model("feedbaks", feedbackSchema);

module.exports = Feedback;