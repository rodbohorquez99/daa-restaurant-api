const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/user.model');

const login = async (req, res, next ) =>{
    try{
        const { username, password } = req.body;

        if(!(username && password)) {
            return res.status(400).send('Toda la informacion en requerida');
        }

const user = await User.findOne({username});

if(user && (await bcrypt.compare(password, user.password))){
    const token = jwt.sign(
        {user_id: user._id, username},
        process.env.TOKEN_KEY,
        {expiresIn: '2h'}
    );

    user.token = token;
    const returnUser = user.toObject();
    delete returnUser.password;

    
    return res.status(200).json(returnUser);
 }else{
    return res.status(401).send('credenciales invalidas.')
 }

    }catch(error){
        return next(error);
    }
    
};
module.exports = {login};