const Movie= require('../models/movie');

const getSortedMovies = async (req, res) => {
    try {
        // Get the sort order from the query parameters, defaulting to newest
        const sortOrder = req.query.sort === 'oldest' ? 1 : -1;

        // Find movies and sort them based on the sortOrder
        const movies = await Movie.find().sort({ yearReleased: sortOrder });

        res.json(movies);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const getMovieById = async (req, res) => {
    const { id } = req.params;

    try {
        const movie = await Movie.findById(id);
        if (!movie) {
            return res.status(404).json({ message: 'Actor not found' });
        }
        res.json(movie);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const createMovie = async (req, res) => {
    try {
        const movie = await new Movie(req.body)
        await movie.save()
        return res.status(201).json({
            movie,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}
const updateMovie = async (req, res) => {
    try {
        let { id } = req.params;
        let movie = await Movie.findByIdAndUpdate(id, req.body, { new: true })
        if (movie) {
            return res.status(200).json(movies)
        }
        throw new Error("Plant not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
const deleteMovie = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Movie.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Movie deleted");
        }
        throw new Error("Movie not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getSortedMovies,
    getMovieById,
    createMovie,
    updateMovie,
    deleteMovie
};