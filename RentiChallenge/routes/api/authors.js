const express = require('express');
const router = express.Router();

const auth = require('../../middleware/auth')

//Book Model
const author = require('../../models/author');

// @route GET api/authors
// @desc Get All authors
// @access Public
router.get('/', (req, res) => {
    author
    .find()
    .then((authors => res.json(authors)))
});

// @route GET api/authors
// @desc Get Search Authors
// @access Private
router.get('/:searchterm',auth, (req, res) => {
    author
    //.find({title : {$regex: `/^${req.params.searchterm}$/i` }})    
    .find({$text: {$search: req.params.searchterm }})

    //.sort({date: -1})
    .then((authors => res.json(authors)))
});



// @route POST api/authors
// @desc Create a Post
// @access Public
/*router.post('/', (req, res) => {
    const newItem = new item({
        name: req.body.name
    })

    newItem.save().then(item => res.json(item));
});*/


// @route DELETE api/authors
// @desc Delete an Author
// @access Public
router.delete('/:id', (req, res) => {
    author.findById(req.params.id)
    .then(author => author.remove().then(()=> res.json({success: true})))
    .catch(err => res.status(404).json({success: false})); 
})


module.exports = router;