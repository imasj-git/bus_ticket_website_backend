const Shedule = require('../model/shedule')
const findAll = async (req, res) => {
    try {
        const shedules = await Shedule.find().populate(["customerId", "itemId",]);
        res.status(200).json(shedules);
    } catch (e) {
        res.json(e)
    }


    // const customers=await Customer.find();
    // res.status(200).json(customers);

}
const save = async (req, res) => {
    try {
        const { name, description, busnumber, busname, type, totalseat } = req.body
        const shedule = new Shedule({
            arrivaltime,
            departuretime,
            availableseat,


        });
        await shedule.save();
        res.status(201).json(shedule)
    } catch (e) {
        res.json(e)
    }

}
const findById = async (req, res) => {
    try {
        const shedule = await Shedule.findById(req.params.id);
        res.status(200).json(shedule)
    } catch (e) {
        res.json(e)

    }


}
const deleteById = async (req, res) => {
    try {
        const shedule = await Shedule.findByIdAndDelete(req.params.id);
        res.status(200).json("data Deleted")
    } catch (e) {
        res.json(e)

    }


}
const update = async (req, res) => {
    try {
        const shedule = await Shedule.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(201).json(shedule)
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