const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.body.token || req.query.token || req.headers['x-access-token'];

    if (!token){
        return res.status(403).send('El token es requerido');
    }

    try{
        const decoded = jwt.verify(token, process.env.TOKEN_KEY);
        req.user = decoded;
    }catch(error){
        return next(error);
    }

    return next();
};

module.exports = verifyToken;