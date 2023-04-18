const getAllReservations = (req, res)=>res.status(200).send('GET /reservation succeded');

const createReservation = (req, res)=>res.status(201).send('POST /reservation succeded');

const getReservation = (req, res)=>res.status(200).send('GET /reservation/:id succeded');

const updateReservation = (req, res)=>res.status(200).send('PUT /reservation/:id succeded');

const deleteReservation =  (req, res)=>res.status(204).send('DELETE /reservation/:id succeded');

module.exports = {getAllReservations, createReservation, getReservation, updateReservation, deleteReservation};