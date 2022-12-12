const UserCtrl = require('../controllers/User.controller');

module.exports = function(app) {
    app.get('/user/songs', UserCtrl.getSongsLikedByUserID);
    app.post('/user/create', UserCtrl.createUser);
    app.put('/user/info', UserCtrl.updateUser );
    app.get('/user/:id', UserCtrl.getUserByID);
    
    // app.put('/songs/:song_id', UserCtrl.updateUserLikedSongs);
    // app.put('/artists/:artist_id', UserCtrl.getArtistsFollowedByUserID);
};