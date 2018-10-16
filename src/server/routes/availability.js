const express = require('express');

const router = express.Router();
const Availability = require('../mock/availability.json');

router.get('/', async (req, res) => {
  const carId = parseInt(req.query.id);

  const cars = Availability.find(car => car.id === carId);

  // return 404 if not found
  if (!cars) res.status(404).send(`car id ${carId} not found`);
  // otherwise
  res.send(cars);
});

module.exports = router;
