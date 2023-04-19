const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users.controller');
const auth = require('../middleware/auth');

router.get('/',auth, usersController.getAllUsers);
router.post('/',auth, usersController.createUser);
router.delete('/:id',auth,  usersController.deleteUser);

module.exports = router;