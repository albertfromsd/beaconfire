const mongoose = require('mongoose');

const ArtistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [
            true,
            "Artist name is required"
        ]
    },
    songs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Song'
    }]
}, {timestamps: true});

module.exports = ArtistSchema;
module.exports.Artist = mongoose.model("Artist", ArtistSchema);