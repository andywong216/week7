const mongoose = require('mongoose');

const actorSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    name: {
        type: String,
        required: true
    },
    bYear: {
        validate: {
            validator: Number.isInteger,
            message: 'Birth year should be integer'
        },
        type: Number,
        required: true

    },
    movies: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Movie' //refer to the Movie
    }]
});
module.exports = mongoose.model('Actor', actorSchema); //export a file

