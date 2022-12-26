const mongoose = require('mongoose');
const { SongGenres, SongLanguages } = require('./Song.enums');

const SongSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [ true, 'Song title is required' ]
    },
    artist: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Artist',
        default: 'Unknown',
    },
    language: {
        type: String,
        enum: SongLanguages.toArray(),
        default: SongLanguages.English,
        required: [ true, 'Language of the song is required' ]
    },
    genre: {
        type: String,
        enum: SongGenres.toArray(),
        default: SongGenres.Unknown,
        required: [ false ]
    },
    usersLiked: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
});

module.exports = SongSchema;
module.exports.Song = mongoose.model("Song", SongSchema);