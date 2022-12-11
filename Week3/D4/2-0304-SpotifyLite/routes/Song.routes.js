const SongCtrl = require('../controllers/Song.controller');

module.exports = function(app) {
    app.post('/songs/create', SongCtrl.createSong);
    app.get('/songs/all', SongCtrl.getAllSongs );
    app.get('/songs/search/:search', SongCtrl.searchSongsByTitleOrArtist);
    app.get('/songs/genre/:genre', SongCtrl.getSongsByGenre);
    app.get('/songs', SongCtrl.getSongsByLanguage);
    
    
    app.put('/songs/id/:song_id', SongCtrl.updateLikedSong);
};