const { Artist } = require('../models/Artist.model');
const { Song } = require('../models/Song.model');
const { SongGenres, SongLanguages } = require('../models/Song.enums');
const { User } = require('../models/User.model');

module.exports.createSeedDB = async( req, res ) => {
    // helpers
    function generateIntStr( num, size ){
        let output = num+"";
        while( output.length < size ) output = "0"+output;
        return output;
    };
    function getRandomInt( min=1, max=100 ) {
        return Math.floor( (Math.random()*(max-min)) + min );  
    } 
    
    try {
        // create artists
        for( let i = 0, count = 0; count < 20; i++ ) {
            const artistID = generateIntStr(i, 3);
            const name = `fake-artist-${artistID}`;
            
            // make sure unique artist name
            const artistCheck = await Artist.findOne({name}).exec();
            if( artistCheck ) continue;

            const newArtist = await Artist.create({
                name,
                songs: []
            });

            if( !newArtist ) throw new Error(500);
            await newArtist.save();
            count++;
            
            // for each artist, create a random number of songs
            const songCount = getRandomInt(3, 20);
            for( let j = 0; j < songCount; j++ ) {
                const songID = generateIntStr(j, 3);
                const title = `SongBy-${artistID}-${songID}`,
                    language = SongLanguages.random(),
                    genre = SongGenres.random();
            
                const newSong = await Song.create({
                    title,
                    artist: newArtist._id,
                    language,
                    genre
                });
                
                if( !newSong ) throw new Error(500);
                await newSong.save();
                newArtist.songs.push(newSong._id);
                await newArtist.save();
            }
        }

        // create users
        for( let i = 0, count = 0; count < 10; i++ ) {
            const userID = generateIntStr(i, 3);
            const username = `User-${userID}`,
                password = `password-${userID}`,
                email = `user-${userID}@fake.com`;
            

            // make sure unique username
            const usernameCheck = await User.findOne({username}).exec();
            if( usernameCheck ) continue;

            // make sure unique email
            const emailCheck = await User.findOne({email}).exec();
            if( emailCheck ) continue;
            
            const newUser = await User.create({
                username,
                email,
                password,
                artistsFollowed: [],
                songsLiked: []
            });

            if( !newUser ) throw new Error(500);
            await newUser.save();
            count++;
        }
        
        const users = await User.find().exec();
        const artists = await Artist.find().exec();
        const songs = await Song.find().exec();

        res.status(200).json({users, artists, songs})

    } catch(err) {
        if( err.message === String('500') ) res.status(500).send("Server error during ")
    }
            
}