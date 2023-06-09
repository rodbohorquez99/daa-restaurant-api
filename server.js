const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const homeRoutes = require('./src/routes/home.routes');
const reservationsRoutes = require('./src/routes/reservations.routes');
const usersRoutes = require('./src/routes/users.routes');

const firstUserUtils = require('./src/utils/first-user-utils');

const app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended:true }));
app.use(cors());

app.use('/', homeRoutes);
app.use('/reservations', reservationsRoutes);
app.use('/users', usersRoutes);

const main = async () => {
    try{
        await mongoose.connect(process.env.DB_URL);
        await firstUserUtils.createFirstUser();
        app.listen(process.env.PORT, () => console.log('Server listening at port ' +process.env.PORT));

    } catch(error){
        console.error(error);
        process.exit(1);
    }
 };

main();
