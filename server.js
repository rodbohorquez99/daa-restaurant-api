const express = require('express');
const app = express();
const port = process.env.port | 3000;

const homeRoutes = require('./src/routes/home.routes');
const reservationsRoutes = require('./src/routes/reservations.routes');
const usersRoutes = require('./src/routes/users.routes');

app.use('/', homeRoutes);
app.use('/reservations', reservationsRoutes);
app.use('/users', usersRoutes);

app.listen(port, () => console.log('Server listening at port ' +port));