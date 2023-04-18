const express = require('express');
require('dotenv').config();


const homeRoutes = require('./src/routes/home.routes');
const reservationsRoutes = require('./src/routes/reservations.routes');
const usersRoutes = require('./src/routes/users.routes');

const app = express();
app.use('/', homeRoutes);
app.use('/reservations', reservationsRoutes);
app.use('/users', usersRoutes);

app.listen(process.env.PORT, () => console.log('Server listening at port ' +process.env.PORT));
