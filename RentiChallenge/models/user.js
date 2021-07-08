const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        default: Date.now,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
    
});
//BookSchema.index({name: 'text'});

module.exports = User = mongoose.model('user',UserSchema);