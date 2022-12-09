const Ctrl = require('../controllers/todolist.controller');

module.exports = function(app) {
    app.get('/todo/todolist', Ctrl.getTodoList);
    app.post('/todo/todolist', Ctrl.postTodo);
    app.put('/todo/todolist', Ctrl.updateTodo);
    app.delete('/todo/todolist', Ctrl.deleteTodo);

    app.all('*', (req, res) => {
        res.status(400).json({ error: "InvalidURI", description: `The URI ${req.url} is not valid.` });
      });
}