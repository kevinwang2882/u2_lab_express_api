const mongoose = require('mongoose')
const MovieSchema = require('./movie')
const ReviewSchema = require('./review')
const ActorSchema = require('./actor')

//we can give them any name we want, but like so much else in JS, it would be counterintuitive to not give it a semantic, recognizable name
const Movie  = mongoose.model('Movie', MovieSchema )
const Review = mongoose.model('Review', ReviewSchema)
const Actor = mongoose.model('Actor', ActorSchema)

module.exports = {
    Actor,
    Review,
    Movie
}