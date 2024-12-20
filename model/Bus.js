const mongoose = require("mongoose")
const busSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }

})
const Bus = mongoose.model("buses", busSchema);

module.exports = Bus;