const Ctrl = require('../controllers/todolist.controller');

module.exports = function(app) {
    app.get('/todo/:filename', Ctrl.getTodoList);
    app.post('/todo/:filename', Ctrl.postTodo);
    app.put('/todo/:filename', Ctrl.updateTodo);
    app.delete('/todo/:filename', Ctrl.deleteTodo);

    app.post('/todo/seed/:filename', Ctrl.seedTodoList)


    app.all('*', (req, res) => {
        res.status(400).json({ error: "InvalidURI", description: `The URI ${req.url} is not valid.` });
      });
}