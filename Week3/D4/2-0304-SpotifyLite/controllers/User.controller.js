const { User } = require('../models/User.model');

module.exports.getUserByID = async( req, res ) => {

};

module.exports.createUser = async( req, res ) => {

};

module.exports.updateUser = async( req, res ) => {

};

module.exports.getSongsLikedByUserID = async( req, res ) => {
    const userIdx = 1;
    console.log({userIdx})
    try {
        const user = await User.findOne({idx: userIdx}).exec();
        console.log(user.username);
        const songsLiked = user.songsLiked;
        console.log(songsLiked);
        res.status(200).json(songsLiked);
    } catch(err) {
        res.status(500).send("Server error finding liked songs by user");
    }
};

module.exports.updateUserLikedSongs = async( req, res ) => {

};

module.exports.getArtistsFollowedByUserID = async( req, res ) => {

};
