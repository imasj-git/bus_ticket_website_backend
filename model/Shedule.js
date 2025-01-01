const mongoose = require("mongoose")
const sheduleSchema = new mongoose.Schema({
    routeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "routes"
    },
    busId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "buses"
    },

    departureTime: {
        type: Time,
        required: true
    },
    arrivalTime: {
        type: Time,
        required: true
    },
    availableSeats: {
        type: String,
        required: true
    }


})
const Shedule = mongoose.model("Shedules", orderSchema);

module.exports = Shedule;