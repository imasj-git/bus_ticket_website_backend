const mongoose = require("mongoose")
const routeSchema = new mongoose.Schema({
    start_location: {
        type: String,
        required: true
    },
    end_location: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    distance: {
        type: String,
        required: true
    }


})
const Route = mongoose.model("routes", routeSchema);

module.exports = Route

