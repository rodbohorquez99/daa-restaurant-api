const express = require('express');
const router = express.Router();
const reservationsController = require('../controllers/reservations.controllers');

router.get('/', reservationsController.getAllReservations);
router.post('/', reservationsController.createReservation);
router.get('/:id',reservationsController.getReservation );
router.put('/:id',reservationsController.updateReservation );
router.delete('/:id', reservationsController.deleteReservation);

module.exports = router;