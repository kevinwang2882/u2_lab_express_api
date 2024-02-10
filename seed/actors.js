const db = require('../db');
const Movie  = require('../models/movie');
const Actor = require('../models/actor');
// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {
    const actors = [
        {
            name: 'Tom Hanks',
            age: '65',
            Alive: 'yes',
            imageUrl:'https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkwNTgxMzE1MDQ0NjQ4ODI4/elvis-photocall---the-75th-annual-cannes-film-festival.jpg',
        },
        {
            name: 'Meryl Streep',
            age: '73',
            Alive: 'yes',
            imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTU4Mjk5MDExOF5BMl5BanBnXkFtZTcwOTU1MTMyMw@@._V1_.jpg',
        },
        {
            name: 'Leonardo DiCaprio',
            age: '47',
            Alive: 'yes',
            imageUrl: 'https://cdn.britannica.com/65/227665-050-D74A477E/American-actor-Leonardo-DiCaprio-2016.jpg',
        },
        {
            name: 'Denzel Washington',
            age: '63',
            Alive: 'yes',
            imageUrl: 'https://m.media-amazon.com/images/M/MV5BMjE5NDU2Mzc3MV5BMl5BanBnXkFtZTcwNjAwNTE5OQ@@._V1_.jpg',
        },
        {
            name: 'Jennifer Lawrence',
            age: '32',
            Alive: 'yes',
            imageUrl: 'https://m.media-amazon.com/images/M/MV5BOTU3NDE5MDQ4MV5BMl5BanBnXkFtZTgwMzE5ODQ3MDI@._V1_.jpg',
        },
    ];

    try {
        // Insert actors into the database
        await Actor.insertMany(actors);
        console.log("Created some actors!");

        // Retrieve actors from the database
        const actorsFromDB = await Actor.find();

        // Retrieve movies from the database
        const movies = await Movie.find();

        // Assuming each actor is associated with multiple movies
        // Assigning movies to each actor
        actorsFromDB[0].movies = [movies[0]._id, movies[1]._id]; // Tom Hanks
        actorsFromDB[1].movies = [movies[2]._id],[movies[3]._id]; // Meryl Streep
        actorsFromDB[2].movies = [movies[4]._id, movies[5]._id]; // Leonardo DiCaprio
        actorsFromDB[3].movies = [movies[6]._id],[movies[7]._id]; // Denzel Washington
        actorsFromDB[4].movies = [movies[8]._id],[movies[9]._id]; // Jennifer Lawrence

        // Save the updated actor documents
        await Promise.all(actorsFromDB.map(actor => actor.save()));

        console.log("Associated actors with movies.");
    } catch (error) {
        console.error("Error associating actors with movies:", error);
    } finally {
        // Close the database connection
        db.close();
    }
};

main();
