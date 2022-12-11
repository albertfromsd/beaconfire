const { User } = require('../models/User.model');
const { Song } = require('../models/Song.model');

module.exports.getUserByID = async( req, res ) => {

};

module.exports.createUser = async( req, res ) => {

};

module.exports.updateUser = async( req, res ) => {

};

module.exports.getSongsLikedByUserID = async( req, res ) => {
    const userIdx = 1;
    
    try {
        const user = await User.findOne({idx: userIdx}).exec();
        const {_id: user_id} = user;
        
        const songs = [];
        for( let i = 0; i < user.songsLiked.length; i++ ) {
            const songID = user.songsLiked[i];
            const song = await Song.findOne({_id: songID}).exec();
            songs.push(song);
        }
        res.status(200).render('home', {user_id, songs, message: "Successfully retrieved songs liked by user 1"})
    } catch(err) {
        res.status(500).send("Server error finding liked songs by user");
    }
};

module.exports.updateUserLikedSongs = async( req, res ) => {

};

module.exports.getArtistsFollowedByUserID = async( req, res ) => {

};
