const mongoose = require('mongoose');

const ArtistSchema = new mongoose.Schema({
    idx: {
        type: Number,
        unique: true,
        required: [true]
    },
    name: {
        type: String,
        unique: true,
        required: [
            true,
            "Artist name is required"
        ]
    },
    songs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Song'
    }],
    followers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
}, {timestamps: true});

module.exports = ArtistSchema;
module.exports.Artist = mongoose.model("Artist", ArtistSchema);