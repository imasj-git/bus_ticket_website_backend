const { string } = require("joi");
const mongoose = require("mongoose")
const ticktSchema = new mongoose.Schema({
    scheduleId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "schedules"
    },
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "buses"
    },

    seatnumber: {
        type: Number,
        required: true
    },
    bookingstatus: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    issuedat: {
        type: Date,
        required: true
    }


})
const Ticket = mongoose.model("tickets", ticktSchema);

module.exports = Ticket;