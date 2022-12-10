const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: [true, 'User name is required to register a user']
    },
    artistsFollowed: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Artist'
    }],
    songsLiked: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Song'
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
    // password: {
    //     type: String,
    //     required: [true, 'Password is required to register user']
    // },
}, {timestamps: true});

// UserSchema.virtual('passwordConfirmation', {
//     get: () => this._passwordConfirmation,
//     set: val => this._passwordConfirmation = val
// })

// UserSchema.pre('validate', function(next) {
//     if (this.password !== this.passwordConfirmation) {
//         this.invalidate('passwordConfirmation', 'Password does not match confirmation');
//     }
//     next();
// });

// UserSchema.pre('save', function(next) {
//     bcrypt.hash(this.password, 10)
//         .then(hashedPw => {
//             this.password = hashedPw;
//             next(); //put this line inside of .then so it saves after it has been hashed
//         })
//         .catch(()=>console.log("Something went wrong during password hashing"));
// });

module.exports = UserSchema;
module.exports.User = mongoose.model("User", UserSchema);