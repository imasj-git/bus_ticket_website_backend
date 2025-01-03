const express = require("express")
const connectDb = require("./config/db")
const CustomerRouter = require("./routes/CustomerRoute")
const BusRouter = require("./routes/BusRoute")

const BookingRouter = require("./routes/BookingRoute")
const AuthRouter = require("./routes/AuthRoute")
const FeedbackRouter = require("./routes/FeedbackRoute")
const PaymentRouter = require("./routes/PaymentRoute")
const RouteRouter = require("./routes/RouteRoute")
const SheduleRouter = require("./routes/SheduleRoute")
const TicketRouter = require("./routes/TicketRoute")

const app = express();
connectDb();

app.use(express.json());
app.use("/api/customer", CustomerRouter);
app.use("/api/bus", BusRouter);
app.use("/api/booking", BookingRouter)
app.use("/api/auth", AuthRouter)

app.use("/api/feedback", FeedbackRouter)
app.use("/api/payment", PaymentRouter)
app.use("/api/route", RouteRouter)
app.use("/api/shedule", SheduleRouter)
app.use("/api/ticket", TicketRouter)





const port = 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)

})