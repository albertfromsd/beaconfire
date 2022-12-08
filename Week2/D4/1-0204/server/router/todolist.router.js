const Ctrl = require('../controller/todolist.controller')
module.exports = function(app) {
    app.get('/data/:filename', Ctrl.getTodo);
    app.post('/data/:filename', Ctrl.postTodo);
    app.put('/data/:filename', Ctrl.updateTodo);
    app.delete('/data/:filename', Ctrl.deleteTodo);
}