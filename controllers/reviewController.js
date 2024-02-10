const Review= require('../models/review');

const getSortedReviews = async (req, res) => {
    try {
        // Get the sort order from the query parameters, defaulting to ascending
        const sortOrder = req.query.sort === 'desc' ? -1 : 1;

        // Find reviews and sort them based on the sortOrder
        const reviews = await Review.find().sort({ score: sortOrder });

        res.json(reviews);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const getReviewById = async (req, res) => {
    const { id } = req.params;

    try {
        const review = await Review.findById(id);
        if (!review) {
            return res.status(404).json({ message: 'Actor not found' });
        }
        res.json(review);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const createReview = async (req, res) => {
    try {
        const review = await new Review(req.body)
        await review.save()
        return res.status(201).json({
            review,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}
const updateReview= async (req, res) => {
    try {
        let { id } = req.params;
        let review = await Review.findByIdAndUpdate(id, req.body, { new: true })
        if (review) {
            return res.status(200).json(review)
        }
        throw new Error("Plant not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
const deleteReview = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Review.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Review deleted");
        }
        throw new Error("Review not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getSortedReviews,
    getReviewById,
    createReview,
    updateReview,
    deleteReview
};