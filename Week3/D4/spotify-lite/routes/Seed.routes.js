const SeedCtrl = require('../controllers/Seed.controller');

module.exports = function(app) {
    app.post('/seed/create', SeedCtrl.createSeedDB);
}