const Actor = require('../models/actor');

const getActor = async (req, res) => {
    try {
        const actors = await Actor.find()
        res.json(actors)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
const getActorById = async (req, res) => {
    try {
        const { id } = req.params;
        const actor = await Actor.findById(id);
        if (!actor) {
            return res.status(404).json({ message: 'Actor not found' });
        }
        res.json(actor);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const createActor = async (req, res) => {
    try {
        const actor = await new Actor(req.body)
        await actor.save()
        return res.status(201).json({
            actor,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}
const updateActor = async (req, res) => {
    try {
        let { id } = req.params;
        let actor = await Actor.findByIdAndUpdate(id, req.body, { new: true })
        if (actor) {
            return res.status(200).json(actor)
        }
        throw new Error("Plant not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
const deleteActor = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Actor.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Actor deleted");
        }
        throw new Error("Actor not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
module.exports = {
    getActor,
    getActorById,
    createActor,
    updateActor,
    deleteActor
}