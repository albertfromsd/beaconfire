const SongCtrl = require('../controllers/Song.controller');

module.exports = function(app) {
    app.post('/songs/create', SongCtrl.createSong);
    app.get('/allsongs', SongCtrl.getAllSongs );
    app.get('/songs?language=""', SongCtrl.getSongsByLanguage);
    
    app.get('/songs/:genre', SongCtrl.getSongsByGenre);
    app.get('/songs/:search', SongCtrl.searchSongsByTitleOrArtist);
    
    app.put('/songs/:song_id', SongCtrl.updateLikedSong);
};