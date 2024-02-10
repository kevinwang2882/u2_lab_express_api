const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const Movie = new Schema(
    {
        title: { type: String, required: true },
        runtime: { type: Number, required: true },
        rating: { type: Number, required: true },
        yearReleased: { type: Number, required: true },
        description: { type: String, required: true },
        actors: [{ type: Schema.Types.ObjectId, ref: 'Actor' }],
        reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
        imageUrl: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('movies', Movie)