const Route = require('../model/Route');

constRoute = require('../model/Route')

const findAll = async (req, res) => {
    try {
        const routes = await Route.find();
        res.status(200).json(routes);
    } catch (e) {
        res.json(e)
    }


    // const customers=await Customer.find();
    // res.status(200).json(customers);

}
const save = async (req, res) => {
    try {
        const route = new Route(req.body);
        await route.save();

        res.status(201).json(route)
    } catch (e) {
        res.json(e)
    }

}
const findById = async (req, res) => {
    try {
        const route = await Route.findById(req.params.id);
        res.status(200).json(route)
    } catch (e) {
        res.json(e)

    }


}
const deleteById = async (req, res) => {
    try {
        const route = await Route.findByIdAndDelete(req.params.id);
        res.status(200).json("data Deleted")
    } catch (e) {
        res.json(e)

    }


}
const update = async (req, res) => {
    try {
        const route = await Route.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(201).json(route)
    } catch (e) {
        res.json(e)

    }


}




module.exports = {
    findAll,
    save,
    findById,
    deleteById,
    update,



}