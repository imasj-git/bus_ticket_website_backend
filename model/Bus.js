const { string } = require("joi");
const mongoose = require("mongoose")
const busSchema = new mongoose.Schema({


    busnumber: {
        type: String,
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
    operatorName: {
        type: String,
        required: true
    },


})
const Bus = mongoose.model("buses", busSchema);

module.exports = Bus;