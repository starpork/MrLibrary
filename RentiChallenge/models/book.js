const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    publisher: {
        type: String,
        required: true,
    },
    synopsis: {
        type: String,
        required: false,
    }
    
});
//BookSchema.index({name: 'text'});

module.exports = Book = mongoose.model('book',BookSchema);