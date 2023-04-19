const bcrypt = require('bcrypt');

const User = require('../models/user.model');
const { use } = require('../routes/home.routes');

const getAllUsers = async (req, res, next) => {
    try{
        const allUsers = await User.find().select('-password -token');
        return res.status(200).json(allUsers);
    }catch (error){
        return next(error);
     }
};

const createUser = async (req, res, next)=>{
    try{
        const { username, name, password } = req.body;
        const encryptedPassword = await bcrypt.hash(password,10);

        const newUser = new User({
            username: username.toLowerCase(),
            name,
            password: encryptedPassword,        
        });

        const insertedUser = await newUser.save();
        const returnUser = insertedUser.toObject();
        delete returnUser.password;
        
        return res.status(201).json(returnUser);
    }catch(error){
        return next(error);
    }
};


const deleteUser =async   (req, res, next )=>{
try{
    const id=req.params.id;
    await User.findByIdAndDelete(id);
    return res.status(204).send();
}catch(error){
    return next(error);
}
};
 

module.exports = {getAllUsers, createUser, deleteUser};