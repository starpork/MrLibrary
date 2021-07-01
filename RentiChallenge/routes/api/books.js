const express = require('express');
const router = express.Router();

//Book Model
const book = require('../../models/book');

// @route GET api/books
// @desc Get All books
// @access Public
router.get('/', (req, res) => {
    book
    .find()
    .sort({date: -1})
    .then((books => res.json(books)))
});

// @route GET api/books
// @desc Get Search Items
// @access Public
router.get('/:searchterm', (req, res) => {
    book
    //.find({title : {$regex: `/^${req.params.searchterm}$/i` }})    
    .find({$text: {$search: req.params.searchterm }})

    //.sort({date: -1})
    .then((books => res.json(books)))
});



// @route POST api/items
// @desc Create a Post
// @access Public
/*router.post('/', (req, res) => {
    const newItem = new item({
        name: req.body.name
    })

    newItem.save().then(item => res.json(item));
});*/


// @route DELETE api/items
// @desc Delete an Item
// @access Public
router.delete('/:id', (req, res) => {
    book.findById(req.params.id)
    .then(book => book.remove().then(()=> res.json({success: true})))
    .catch(err => res.status(404).json({success: false})); 

})


module.exports = router;