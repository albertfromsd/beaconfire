const mongoose = require('mongoose');
const { 
    SongGenreEnums, 
    SongGenreEnumsArray,
    SongLanguageEnums,
    SongLanguageEnumsArray
} = require('./Song.enums');

const SongSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [ true, 'Song title is required' ]
    },
    artist: {
        type: mongoose.Schema.Types.ObjectId,
        default: 'Unknown',
    },
    language: {
        type: String,
        enum: SongLanguageEnumsArray,
        default: SongLanguageEnums.Unknown,
        required: [ true, 'Language of the song is required' ]
    },
    genre: {
        type: String,
        enum: SongGenreEnumsArray,
        default: SongGenreEnums.Unknown,
        required: [ false ]
    }
});

module.exports = SongSchema;
module.exports.Song = mongoose.model("Song", SongSchema);