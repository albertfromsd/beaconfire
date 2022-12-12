
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
mongoose.connect("mongodb://127.0.0.1/spotifylite", {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(() => console.log("[Spotify Lite] Established a connection to the database"))
    .catch(err => console.log("[ERROR: mongoose.config] Could not connect to the database Todolist: ", err));