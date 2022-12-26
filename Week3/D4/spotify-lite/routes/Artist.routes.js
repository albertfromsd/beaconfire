const ArtistCtrl = require('../controllers/Artist.controller');

module.exports = function(app) {
    app.put( '/artists/:artist_id', ArtistCtrl.updateArtistsFollowed );
};