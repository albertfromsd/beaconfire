const mongoose = require('mongoose');

const validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const UserSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, 'First name is required to register a user']
    },
    lastname: {
        type: String,
        required: [true, 'Last name is required to register a user']
    },
    username: {
        type: String,
        unique: true,
        required: [true, 'User name is required to register a user']
    },
    email: {
        type: String,
        unique: true,
        trime: true,
        lowercase: true,
        validate: [validateEmail, "Valid email is required"],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        required: [true, 'Email is required to register a user']
    },
    password: {

    },
    artistsFollowed: {

    },
    songsLiked: {

    }
}, {timestamps: true});

module.exports = UserSchema;
module.exports.User = mongoose.model("User", UserSchema);