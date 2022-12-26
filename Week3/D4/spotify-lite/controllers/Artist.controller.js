const { Artist } = require('../models/Artist.model');
const { User } = require('../models/User.model');

module.exports.updateArtistsFollowed = async( req, res ) => {
    const userIdx = 1;
    const {artist_id} = req.params;
    // include boolean check later to toggle back and forth
    try {
        const user = await User.findOne({idx: userIdx}).exec();
        const artist = await Artist.findOne({_id: artist_id}).exec();

        if( !user || !artist ) throw new Error(400);

        if( user.artistsFollowed.indexOf(artist_id) === -1 ) {
            user.artistsFollowed.push(artist);
            await user.save();
        } else {
            // toggle code
        }

        if( artist.followers.indexOf(user._id) === -1 ) {
            artist.followers.push(user);
            await artist.save();
        } else {
            // toggle code
        }

        res.status(200).send(`Successfully followed artist id: ${artist_id}`);
    } catch(e) {
        if( e.message === String('400') ) res.status(400).send("Artist or user info unable to be located");
        else res.status(500).send("Server error while trying to follow artist")
    }
}
