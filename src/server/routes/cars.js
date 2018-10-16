const express = require('express');

const router = express.Router();
const Cars = require('../mock/cars.json');

router.get('/', async (req, res) => {
  res.send(Cars);
});

module.exports = router;
