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
const Item = mongoose.model("bus", busSchema);

module.exports = Bus;