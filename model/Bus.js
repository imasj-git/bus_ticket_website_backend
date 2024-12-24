const mongoose = require("mongoose")
const busSchema = new mongoose.Schema({


    busnumber: {
        type: Number,
        required: true
    },
    busname: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    totalseat: {
        type: Number,
        required: true
    },
    routeid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "routes",
    }

})
const Bus = mongoose.model("buses", busSchema);

module.exports = Bus;