const bcrypt = require('bcrypt'); 

const User = require('../models/user.model');

const createFirstUser = async () =>{
    const users = await User.find();

    if (users.length == 0) {
        const encryptedPassword = await bcrypt.hash(process.env.FIRSTUSER_PASSWORD, 10);

        const newUser = new User({
            username: 'admin',
            name: 'Admin',
            password: encryptedPassword,
        });

        await newUser.save();
        
    }

};

module.exports = { createFirstUser };