const db = require('../db')
const Review = require('../models/review');
const Movie  = require('../models/movie');
// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))


const main = async () => {
    const  forrestGump = await Movie.findOne({  title: 'Forrest Gump' });
    const castAway = await Movie.findOne({ title: 'Cast Away' });
    const inception = await Movie.findOne({ title: 'Inception' });
    const titanic = await Movie.findOne({ title: 'Titanic' });
    const theHungerGames = await Movie.findOne({ title: 'The Hunger Games' });
    const mammaMia= await Movie.findOne({ title: 'Mamma Mia' });



    const reviews = [{
        movie: forrestGump._id, // Assuming movie1 is the document for "Forrest Gump"
        score: '9',
        comment: "A masterpiece! Tom Hanks delivers an outstanding performance."
    
    },
    {
        movie: castAway._id, // Assuming movie1 is the document for "Forrest Gump"
        score: '8',
        comment: "Heartwarming and touching story."
    },
    {
        movie: inception._id, // Assuming movie2 is the document for "Inception"
        score: '10',
        comment: "Mind-bending! Leonardo DiCaprio shines in this brilliant film."
    }
    ,
    {
        movie: titanic._id, // Assuming movie2 is the document for "Inception"
        score: '9',
        comment: "Absolutely captivating. A must-watch!"
    }
    ,
    {
        movie: theHungerGames._id, // Assuming movie3 is the document for "The Devil Wears Prada"
        score: '7',
        comment: "Entertaining movie with great performances."
    }
    ,
    {
        movie: mammaMia._id, // Assuming movie3 is the document for "The Devil Wears Prada"
        score: '8',
        comment: "Meryl Streep's performance is exceptional."
    }

    ]

    await Review.insertMany(reviews)
    console.log("Created some actors!")
}
const run = async () => {
    await main()
    db.close()
}

run()