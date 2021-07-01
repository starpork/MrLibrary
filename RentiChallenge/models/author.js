const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    biography: {
        type: String,
        required: true,
    }    
});

module.exports = Author = mongoose.model('author',AuthorSchema);