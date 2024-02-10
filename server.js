const express = require('express');
const db = require('./db');
const reviewController = require('./controllers/reviewController');
const movieController = require('./controllers/movieController');
const actorController = require('./controllers/actorController');

const PORT = process.env.PORT || 3001;

const app = express();

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.get('/', (req, res) => res.send('This is our landing page!'));
app.get('/reviews', reviewController.getSortedReviews);
app.get('/movies', movieController.getSortedMovies);
app.get('/actors', actorController.getActor);

app.get('/movies/:id', movieController.getMovieById);
app.get('/reviews/:id', reviewController.getReviewById);
app.get('/actors/:id', actorController.getActorById);

app.post('/reviews', reviewController.createReview)
app.post('/movies', movieController.createMovie)
app.post('/actors', actorController.createActor)

app.put('/reviews/:id', reviewController.updateReview)
app.put('/movies/:id', movieController.updateMovie)
app.put('/actors/:id', actorController.updateActor)

app.delete('/reviews/:id', reviewController.deleteReview)
app.delete('/movies/:id', movieController.deleteMovie)
app.delete('/actors/:id', actorController.deleteActor)