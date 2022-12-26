const { User } = require('../models/User.model');
const { Song } = require('../models/Song.model');

const jwt = require('jsonwebtoken');
const { createToken } = require('../utils/jwt.utils');

const bcrypt = require('bcrypt');
const saltRounds = process.env.saltRounds;

module.exports.getUserByID = async( req, res ) => {

};

module.exports.createUser = async( req, res ) => {
    const { username, email, password } = req.body;
    try {
        // hash pw
        const hashedPW = await bcrypt.genSalt(saltRounds, async (err, salt) => {
            try {
                await bcrypt.hash(password, saltRounds, ( err, hash ) => {
                    return hash;
                });
            } catch(hashErr) {
                console.log(hashErr);
            }
        } );

        // check if user exists
        const usernameCheck = await User.findOne({username}).exec();
        const emailCheck = await User.findOne({email}).exec();
        if( !usernameCheck || !emailCheck ) throw new Error(400);

        // create user
        const newUser = await User.create({
            username,
            email,
            password: hashedPW
        });
        if( !newUser ) throw new Error(400);
        newUser.save();

        const user = { _id: user._id, usrename: user.username };
        const accessToken = createToken(user);
        res.cookie('token', accessToken, {
            httpOnly: true,
            maxAge: 60 * 60 * 25
        });
        res.render('home', user);
    } catch(e) {

    }
};

module.exports.login = async( req, res ) => {

};

module.exports.updateUser = async( req, res ) => {
    const {username, email, password, fieldToChange } = req.body;

    const userIdx = 1;
    try {
        const user = await User.findOne({idx: userIdx}).exec();
        switch(fieldToChange) {
            case 'username':
                user.username = username;
                break;
            case 'email':
                user.email = email;
                break;
            case 'password':
                user.password = password;
                break;
            default:
                break;
        }
        await user.save();

        res.status(200).send({user});
    } catch(e) {
        res.status(500).send("Server error on user update");
    }

};

module.exports.getSongsLikedByUserID = async( req, res ) => {
    const userIdx = 1;
    
    try {
        const user = await User.findOne({idx: userIdx}).exec();
        const {_id: user_id} = user;
        
        const songs = [];
        for( let i = 0; i < user.songsLiked.length; i++ ) {
            const songID = user.songsLiked[i];
            const song = await Song.findOne({_id: songID}).exec();
            songs.push(song);
        }
        res.status(200).render('home', {user_id, songs, message: "Successfully retrieved songs liked by user 1"})
    } catch(err) {
        res.status(500).send("Server error finding liked songs by user");
    }
};

module.exports.updateUserLikedSongs = async( req, res ) => {

};

module.exports.getArtistsFollowedByUserID = async( req, res ) => {

};
