const Booking = require('../model/booking')
const findAll = async (req, res) => {
    try {
        const books = await Booking.find().populate(["customerId", "busId",]);
        res.status(200).json(books);
    } catch (e) {
        res.json(e)
    }


    // const customers=await Customer.find();
    // res.status(200).json(customers);

}
const save = async (req, res) => {
    try {
        const book = new Booking(req.body);
        await book.save();
        res.status(201).json(book)
    } catch (e) {
        res.json(e)
    }

}
const findById = async (req, res) => {
    try {
        const book = await Booking.findById(req.params.id);
        res.status(200).json(book)
    } catch (e) {
        res.json(e)

    }


}
const deleteById = async (req, res) => {
    try {
        const booking = await Booking.findByIdAndDelete(req.params.id);
        res.status(200).json("data Deleted")
    } catch (e) {
        res.json(e)

    }


}
const update = async (req, res) => {
    try {
        const booking = await Booking.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(201).json(booking)
    } catch (e) {
        res.json(e)

    }


}


module.exports = {
    findAll,
    save,
    findById,
    deleteById,
    update
}