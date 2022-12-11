const { Song } = require('../models/Song.model');
const { SongGenres, SongLanguages } = require('../models/Song.enums');
const { User } = require('../models/User.model');

module.exports.createSong = async( req, res ) => {

};

module.exports.getAllSongs = async( req, res ) => {
    try {
        const userIdx = 1;
        const user = await User.findOne({idx: userIdx}).exec();
        const {_id: user_id} = user;

        const songs = await Song.find().exec();
        songs.map( async( song ) => {
            const artistID = song.artist;
            try {
                const artist = await Artist.findOne({_id: artistID});
                song.artist = artist;
                if( song.usersLikeList.indexOf(user_id) !== -1 ) {
                    song.liked = true;
                } else {
                    song.liked = false;
                }
            } catch(e) {
                console.log(e);
            }
        } );

        res.status(200).render('home', {songs, message: null})
    } catch(err) {
        console.log(err);
        res.status(500).send("Server error in retrieving all songs")
    }
}

module.exports.getSongByID = async( req, res ) => {

};

module.exports.getSongsByLanguage = async( req, res ) => {

};

module.exports.getSongsByGenre = async( req, res ) => {

};

module.exports.getSongsByArtistID = async( req, res ) => {

};

module.exports.searchSongsByTitleOrArtist = async( req, res ) => {

};

module.exports.updateLikedSong = async( req, res ) => {
    const { userIdx } = req.body;
    const { id: song_id} = req.params;
    try {
        const user = await User.findOne({idx: userIdx}).exec();
        const song = await Song.findOne({_id: song_id}).exec();

        const songLikedIdx = user.songsLiked.indexOf(song_id);
        const userLikedIdx = song.usersLiked.indexOf(user._id);
        if( songLikedIdx !== -1 ) {
            user.songsLiked.splice(songLikedIdx, 1);
            song.usersLiked.splice(userLikedIdx, 1);
        } else {
            user.songsLiked.push(song._id);
            song.usersLiked.push(user._id);
        }
        await user.save();
        await song.save();

        res.send(200).json({user, song});
    } catch(e) {

    }
};

module.exports.createSeedSongs = async( req, res ) => {

}