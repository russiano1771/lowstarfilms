const verify = require("../verifyToken");
const Movie = require('../models/movie')
const router = require('express').Router()




// create

router.post("/", verify, async (req, res) => {
    if (req.user.isAdmin) {
        const newMovie = new Movie(req.body);
        try {
            const savedMovie = await newMovie.save();
            res.status(201).json(savedMovie);
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("You are not allowed!");
    }
});

// update

router.put('/:id', verify, async (req, res) => {
    if (req.user.isAdmin){
        try{
            const putMovie = await Movie.findByIdAndUpdate(req.params.id, {$set: req.body}, {new : true})
        } catch (e) {
            console.log(e);
        }
    }
})

//delete

router.delete('/:id', verify, async (req, res) => {
    if (req.user.isAdmin){
        try {
           await Movie.findByIdAndDelete(req.params.id)
            res.status(200).json('Movie has been deleted!')
        } catch (e) {
            res.status(500).json('internal error')
        }
    } else{
        res.status(403).json('You are not allowed')
    }
})


// getAll
router.get('/', verify, async (req, res) => {
    if (req.user.isAdmin){
        const movie = await Movie.find()
        res.status(200).json(movie.reverse()) /// reverse - выдает массив с фильмами в обратном порядке
    }
})


//getOne

router.get('/find/:id', verify, async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id)
        res.status(200).json(movie)
    } catch (e) {
        console.log(e);
    }
})

// getRandom

router.get('/random', verify, async (req, res) => {
        const type = req.query.type;
        let movies;

        try {
            if (type === "serias"){
                movies = await Movie.aggregate([
                    {$match: {isSeries: true}},
                    {$sample: {size: 1}}
                ])
            } else {
                movies = await Movie.aggregate([
                    {$match: {isSeries: false}},/// method match = соответствовать какому либо параметру, например 'genre'-жанр
                    {$sample: {size: 1}} /// определяет количество выданных фильмов по параметрам запроса
                ])
            }
            res.status(200).json(movies)
        } catch (e) {
            res.status(500).json(e)
        }
})
module.exports = router