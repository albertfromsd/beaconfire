
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/todolist", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true
})
    .then(() => console.log("[PirateApp] Established a connection to the database"))
    .catch(err => console.log("[ERROR: mongoose.config] Could not connect to the database PirateApp", err));