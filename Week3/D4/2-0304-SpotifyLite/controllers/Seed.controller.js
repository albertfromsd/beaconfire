const { Artist } = require('../models/Artist.model');
const { Song } = require('../models/Song.model');
const { SongGenreEnums, SongLanguageEnums } = require('../models/Song.enums');
const { User } = require('../models/User.model');

module.exports.createSeedDB = async( req, res ) => {
    function generateRandomInt( min=1, max=100 ) {
        return Math.floor( (Math.random()*max) + min );
    };
    function generateIntStr( num, size ) {
        let output = num+"";
        while( output.length < size ) output = "0"+output;
        return output;
    }
    try {
        // loop to create artists
        let artistCount = generateRandomInt(20, 100);
        for( let i = 0; i < artistCount; i++ ) {
            const fakeID = generateIntStr(i, 3);
            const name = `fake-artist-${fakeID}`;
            const artist = await Artist.create({
                name
            });
            
        }

    } catch(err) {

    }
        // inner loop to create songs by artist
            // insert genre, language

}