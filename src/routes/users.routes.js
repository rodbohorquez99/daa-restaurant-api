const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>res.status(200).send('GET /users succeded'));
router.post('/', (req, res)=>res.status(201).send('POST /users succeded'));
router.get('/:id', (req, res)=>res.status(200).send('GET /users/:id succeded'));
router.delete('/:id', (req, res)=>res.status(204).send());

module.exports = router;