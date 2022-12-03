const Ctrl = require('../controller/todolist.controller')
module.exports = function(app) {
    app.get('/data/:filename', Ctrl.getTodo);
    app.post('/data/:filename', Ctrl.postTodo);
    app.put('/data/:filename', Ctrl.updateTodo);
    app.delete('/data/:filename', Ctrl.deleteTodo);
    // app.get('/api/allpirates', PCtrl.getAllPiratesSortedByName);
    // app.get('/api/pirate/:id', PCtrl.getPirateById);

    // app.post('/api/pirate/create', PCtrl.createPirate);
    // app.put('/api/pirate/:id/edit', PCtrl.editPirate);

    // app.delete('/api/pirate/:id/delete', PCtrl.deletePirate);
}