const express = require("express");
const {
  createBooking,
  getAllBookings,
  getBookingById,
  cancelBooking,
} = require("../controllers/BookingController");

const router = express.Router();

router.post("/", createBooking); // ✅ Create a new booking
router.get("/", getAllBookings); // ✅ Get all bookings
router.get("/:id", getBookingById); // ✅ Get a single booking by ID
router.delete("/:id", cancelBooking); // ✅ Cancel a booking

module.exports = router;
