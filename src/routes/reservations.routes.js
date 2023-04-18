const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>res.status(200).send('GET /reservation succeded'));
router.post('/', (req, res)=>res.status(201).send('POST /reservation succeded'));
router.get('/:id', (req, res)=>res.status(200).send('GET /reservation/:id succeded'));
router.put('/:id', (req, res)=>res.status(200).send('PUT /reservation/:id succeded'));
router.delete('/:id', (req, res)=>res.status(204).send('DELETE /reservation/:id succeded'));

module.exports = router;