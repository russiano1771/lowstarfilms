const router = require('express').Router()
const verify = require('../verifyToken')
const List = require('../models/list')


// create List with Genre или например "Лучшие боевики 2022"
router.post('/', verify, async (req, res) => {
    if (req.user.isAdmin){
        const list = new List(req.body)
        try{
            const savedList = await list.save()
            res.status(200).json(savedList)
        } catch (e) {
            console.log(e);
        }
    }
})


// delete


router.delete('/:id', verify, async (req, res) => {
    if (req.user.isAdmin){
        const movie = await List.findByIdAndDelete(req.params.id)
        res.status(200).json('Success!')
    } else {
        res.status(401).json('You are not allowed')
    }
})



// get All

router.get('/', verify, async (req, res) => {
    const queryTypes = req.query.type
    const queryGenre = req.query.genre

    let selectList = [];
    if (queryTypes){
        if (queryGenre){
            selectList = await List.aggregate([
                {$sample: {size: 10}},
                {$match:{type: queryTypes, genre: queryGenre}}
            ])
        } else {
            selectList = await List.aggregate([
                {$sample: {size: 10}},
                {$match: {type: queryTypes}}
            ])
        }
    } else {
            selectList = await List.aggregate([
                {$sample: {size: 10}}
            ])
    }

    res.status(200).json(selectList)
})

module.exports = router