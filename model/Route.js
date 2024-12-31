const mongoose = require("mongoose")
const RouteSchema = new mongoose.Schema({
    start_location: {
        type: String,
        required: true
    },
    end_location: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    distance: {
        type: Number,
        required: true
    }


})
const Route = mongoose.model("customers", routeSchema);

module.exports = Route

