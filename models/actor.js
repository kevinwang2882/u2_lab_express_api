const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const Actor = new Schema(
    {
        name: { type: String, required: true },
        movies: [{ type: Schema.Types.ObjectId, ref: 'Movie' }],
        age: { type: String, required: true },
        Alive: { type: String, required: true },
        imageUrl: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('actors', Actor)