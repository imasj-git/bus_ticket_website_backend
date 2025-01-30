// const express = require("express")
// const connectDb = require("./config/db")
// const CustomerRouter = require("./routes/CustomerRoute")
// const BusRouter = require("./routes/BusRoute")

// const BookingRouter = require("./routes/BookingRoute")
// const AuthRouter = require("./routes/AuthRoute")
// const FeedbackRouter = require("./routes/FeedbackRoute")
// const PaymentRouter = require("./routes/PaymentRoute")
// const RouteRouter = require("./routes/RouteRoute")
// const ScheduleRouter = require("./routes/ScheduleRoute")
// const TicketRouter = require("./routes/TicketRoute")

// const app = express();
// connectDb();

// app.use(express.json());
// app.use("/api/customer", CustomerRouter);
// app.use("/api/bus", BusRouter);
// app.use("/api/booking", BookingRouter)
// app.use("/api/auth", AuthRouter)

// app.use("/api/feedback", FeedbackRouter)
// app.use("/api/payment", PaymentRouter)
// app.use("/api/route", RouteRouter)
// app.use("/api/schedule", ScheduleRouter)
// app.use("/api/ticket", TicketRouter)





// const port = 3000;
// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`)

// })
const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const colors = require("colors");
const connectDB = require("./config/db");
const cookieParser = require("cookie-parser");
const mongoSanitize = require("express-mongo-sanitize"); // for sql injection
const helmet = require("helmet");
const xss = require("xss-clean");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(cors());
app.options("*", cors());

// Load env file
dotenv.config({
  path: "./config/config.env",
});

// Connect to database
connectDB();

// Route files
const auth = require("./routes/customer");

// Body parser
app.use(express.json());
app.use(cookieParser());

app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({ extended: true }));

// Dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Sanitize data
app.use(mongoSanitize());

// Set security headers
app.use(helmet());

// Prevent XSS attacks
app.use(xss());

// Set static folder
app.use(express.static(path.join(__dirname, "public")));
// app.use(express.static('public'));

// Mount routers
app.use("/api/v1/auth", auth);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // Close server & exit process
  server.close(() => process.exit(1));
});
