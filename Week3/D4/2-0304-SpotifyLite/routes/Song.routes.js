const SongCtrl = require('../controllers/Song.controller');

module.exports = function(app) {
    app.get('/songs?language=""', SongCtrl.getSongsByLanguage);
    app.get('/songs/:genre', SongCtrl.getSongsByGenre);
    app.get('/songs/:search', SongCtrl.searchSongsByTitleOrArtist);

    app.post('/songs/create', SongCtrl.createSong);

    app.put('/songs/:song_id', SongCtrl.updateLikedSong);
};