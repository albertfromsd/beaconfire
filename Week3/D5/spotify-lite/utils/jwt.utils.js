const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY;

module.exports.createToken = (user) => {
    const accessToken = jwt.sign(user, SECRET_KEY);
    return accessToken;
}

module.exports.authenticateToken = async( req, res, next ) => {
    const token = req.cookies.token;

    if( !token ) return res.redirect('/');
    try {
        const isTokenValid = jwt.verify(token, SECRET_KEY);
        if( isTokenValid ) {
            req.authenticated = true;
            req.userID = isTokenValid._id;

            return next();
        }
    } catch(e) {
        res.clearCookie("token");
        return res.redirect("/");
    }
}