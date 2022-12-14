const express = require('express');
const app = express();
const methodOverride = require('method-override');
const path = require('path');

const jwt = require('jsonwebtoken');

// cookie parser
const cookieParser = require('cookie-parser');
app.use(cookieParser());

require('./config/mongoose.config');
require('dotenv').config({ path: path.join(__dirname, './.env') });

// express middleware set up
app.use('/', express.json()); // parse requests with JSON payload/body
app.use('/public', express.static(path.join(__dirname, '/public'))); // serve static files
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// ejs views engine set up
app.set("views", path.join(__dirname, "/views")); // where template files are located
app.set("view engine", "ejs"); // default engine, dont need to specify .ejs extension
app.engine('ejs', require('ejs').__express);


// import routes
require('./routes/User.routes')(app);
require('./routes/Artist.routes')(app);
require('./routes/Song.routes')(app);
require('./routes/Seed.routes')(app);

app.use('/', (req, res) => {
    res.render('home', {} );
})

app.all('*', (req, res) => {
    res.status(400).send("Page not found");
});

const PORT = process.env.PORT || 8000;
const server = app.listen(PORT, () => {
    console.log(`Server is listening at Port ${PORT}`);
});
