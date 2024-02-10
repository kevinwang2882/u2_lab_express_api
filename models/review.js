const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const Review = new Schema(
    {
        movie: { type: Schema.Types.ObjectId, ref: 'Movie', required: true },
        score: { type: String, required: true },
        comment: { type: String, required: true },

    },
    { timestamps: true },
)

module.exports = mongoose.model('reviews', Review)