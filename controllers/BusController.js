
const Bus = require('../model/Bus')
const findAll = async (req, res) => {
    try {
        const buses = await Bus.find();
        res.status(200).json(buses);
    } catch (e) {
        res.json(e)
    }

}
const save = async (req, res) => {
    try {
        const { operatorName, busnumber, busname, type, totalseat } = req.body
        const bus = new Bus({

            operatorName,
            busnumber,
            busname,
            type,
            totalseat,

        });
        await bus.save();
        res.status(201).json(bus)
    } catch (e) {
        res.json(e)
    }

}
const findById = async (req, res) => {
    try {
        const bus = await Bus.findById(req.params.id);
        res.status(200).json(bus)
    } catch (e) {
        res.json(e)

    }


}
const deleteById = async (req, res) => {
    try {
        const bus = await Bus.findByIdAndDelete(req.params.id);
        res.status(200).json("data Deleted")
    } catch (e) {
        res.json(e)

    }


}
const update = async (req, res) => {
    try {
        const bus = await Bus.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(201).json(bus)
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