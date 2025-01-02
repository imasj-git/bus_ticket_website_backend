const mongoose = require("mongoose");
const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/db_ticketsewa");
        console.log("Mongodb Connected")

    } catch (e) {
        console.log("Not connected");

    }
}

module.exports = connectDB