const jwt = require('jsonwebtoken');
const createError = require("./error.js");


const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;

    if(!token){
        return next(createError(400, "You are not authenticated"));
    }

    jwt.verify(token, process.env.JWT, (err, user)=>{
        if(err) next(createError(403, "Token is invalid"));
        req.user = user;
        next();
    })
}


const verifyUser = (req, res, next) => {
    
    //Getting req.user from first Middleware verifyToken
    if (req.user.id === req.params.id || req.user.isAdmin) {
    next();
    } else {
    return next(createError(403, "You are not authorized!"));
    }
};


const verifyAdmin = (req, res, next) => {
    
    //req.user we are getting from middleware verifyToken.
    if (req.user.isAdmin) {
    next();
    } else {
    return next(createError(403, "You are not authorized!"))
    }
};



module.exports = {
    verifyToken,
    verifyUser,
    verifyAdmin
}