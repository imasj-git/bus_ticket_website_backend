const mongoose = require("mongoose")
const scheduleSchema = new mongoose.Schema({
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
const Schedule = mongoose.model("schedules", scheduleSchema);

module.exports = Schedule;