const Booking = require('../model/booking')
const findAll = async (req, res) => {
    try {
        const books = await Booking.find().populate(["customerId", "itemId",]);
        res.status(200).json(books);
    } catch (e) {
        res.json(e)
    }


    // const customers=await Customer.find();
    // res.status(200).json(customers);

}
const save = async (req, res) => {
    try {
        const books = new Booking(req.body);
        await books.save();
        res.status(201).json(books)
    } catch (e) {
        res.json(e)
    }

}


module.exports = {
    findAll,
    save
}