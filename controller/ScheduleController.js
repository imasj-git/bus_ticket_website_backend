const Schedule = require('../model/Schedule')
const findAll = async (req, res) => {
    try {
        const schedules = await Schedule.find().populate(["customerId", "itemId",]);
        res.status(200).json(sedules);
    } catch (e) {
        res.json(e)
    }


    // const customers=await Customer.find();
    // res.status(200).json(customers);

}
const save = async (req, res) => {
    try {
        const { arrivaltime, departuretime, availableseat } = req.body
        const schedule = new Schedule({
            arrivaltime,
            departuretime,
            availableseat,


        });
        await schedule.save();
        res.status(201).json(schedule)
    } catch (e) {
        res.json(e)
    }

}
const findById = async (req, res) => {
    try {
        const schedule = await Schedule.findById(req.params.id);
        res.status(200).json(schedule)
    } catch (e) {
        res.json(e)

    }


}
const deleteById = async (req, res) => {
    try {
        const schedule = await Schedule.findByIdAndDelete(req.params.id);
        res.status(200).json("data Deleted")
    } catch (e) {
        res.json(e)

    }


}
const update = async (req, res) => {
    try {
        const schedule = await Schedule.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(201).json(schedule)
    } catch (e) {
        res.json(e)

    }


}



module.exports = {
    findAll,
    save,
    update,
    deleteById,
    findById,
}