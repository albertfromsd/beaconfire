
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
mongoose.connect("mongodb://127.0.0.1/spotifylite", {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(() => console.log("[Todolist] Established a connection to the database"))
    .catch(err => console.log("[ERROR: mongoose.config] Could not connect to the database Todolist: ", err));

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});