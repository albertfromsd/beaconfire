const mongoose = require('mongoose');

const SongSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [ true, 'Song title is required' ]
    },
    artist: {
        type: mongoose.Schema.Types.ObjectId,
        default: 'Unknown',
        required: [ true, 'Artist of the song is required' ]
    },
    language: {
        type: String,
        required: [ true, 'Language of the song is required' ]
    },
    genre: {
        type: String,
        default: 'Unknown',
        required: [ false ]
    }
});

module.exports = SongSchema;
module.exports.Song = mongoose.model("Song", SongSchema);