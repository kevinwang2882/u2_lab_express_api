const db = require('../db')
const Movie  = require('../models/movie')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const movies = [{
        title: 'Forrest Gump',
        runtime: '142',
        rating: '8.8',
        yearReleased: '1994',
        description: 'A man with a low IQ embarks on an extraordinary journey through three decades of American history, meeting historical figures and influencing cultural events along the way.',
        imageUrl: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p15829_v_v13_aa.jpg',
    },
    {
        title: 'Cast Away',
        runtime: '143',
        rating: '7.8',
        yearReleased: '2000',
        description: 'After a plane crash, a FedEx executive must transform himself physically and emotionally to survive on a deserted island.',
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BN2Y5ZTU4YjctMDRmMC00MTg4LWE1M2MtMjk4MzVmOTE4YjkzXkEyXkFqcGdeQXVyNTc1NTQxODI@._V1_.jpg',
    },
    {
        title: 'The Devil Wears Prada',
        runtime: '109',
        rating: '6.9',
        yearReleased: '2006',
        description: 'A smart but sensible new graduate lands a job as an assistant to Miranda Priestly, the demanding editor-in-chief of a high fashion magazine.',
        imageUrl: 'https://m.media-amazon.com/images/I/61O0FZAnSWL._AC_UF894,1000_QL80_.jpg',
    },
    {
        title: 'Mamma Mia',
        runtime: '108',
        rating: '6.4',
        yearReleased: '2008',
        description: 'The story of a bride-to-be trying to find her real father told using hit songs by the popular 70s group ABBA.',
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BMjEwMTM3OTI1NV5BMl5BanBnXkFtZTgwNDk5NTY0NTM@._V1_FMjpg_UX1000_.jpg',
    },
    {
        title: 'Titanic',
        runtime: '195',
        rating: '7.8',
        yearReleased: '1997',
        description: 'A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.',
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg',
    },
    {
        title: 'Inception',
        runtime: '148',
        rating: '8.8',
        yearReleased: '2010',
        description: 'A thief who enters the dreams of others to steal their secrets must plant an idea into a CEOs mind.',
        imageUrl: 'https://m.media-amazon.com/images/I/919mVr6ikcL._AC_UF894,1000_QL80_.jpg',
    },
    {
        title: 'Malcolm X',
        runtime: '202',
        rating: '7.7',
        yearReleased: '1992',
        description: 'Biographical epic of the controversial and influential Black Nationalist leader, from his early life and career as a small-time gangster, to his ministry as a member of the Nation of Islam.',
        imageUrl:'https://m.media-amazon.com/images/I/617IDtoZb6L._AC_UF1000,1000_QL80_.jpg',
    },    {
        title: 'Training Day',
        runtime: '122',
        rating: '7.7',
        yearReleased: '2001',
        description: 'On his first day on the job as a Los Angeles narcotics officer, a rookie cop goes beyond a full work day in training within the narcotics division of the LAPD with a rogue detective who is not what he appears to be.',
        imageUrl: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p28363_p_v12_aa.jpg',
    },
    {
        title: 'The Hunger Games',
        runtime: '142',
        rating: '7.2',
        yearReleased: '2012',
        description: 'In a dystopian future, the totalitarian nation of Panem is divided into 12 districts and the Capitol. Each year two young representatives from each district are selected by lottery to participate in The Hunger Games. ',
        imageUrl: 'https://musicart.xboxlive.com/7/98f86800-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080',
    },
    {
        title: 'Silver Linings Playbook',
        runtime: '122',
        rating: '7.7',
        yearReleased: '2012',
        description: 'After a stint in a mental institution, former teacher Pat Solitano moves back in with his parents and tries to reconcile with his ex-wife. ',
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTM2MTI5NzA3MF5BMl5BanBnXkFtZTcwODExNTc0OA@@._V1_.jpg',
    },
    ]

    await Movie.insertMany(movies)
    console.log("Created some actors!")
}
const run = async () => {
    await main()
    db.close()
}

run()