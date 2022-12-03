const express = require('express');
const app = express();
// const router = express.Router();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./router/todolist.router')(app);

const PORT = process.env.PORT || 8000;
const server = app.listen(PORT, () => {
    console.log("Server is listening at Port 8000");
});
