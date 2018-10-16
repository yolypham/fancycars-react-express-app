const express = require('express');
const cars = require('./routes/cars');
const availability = require('./routes/availability');

const app = express();

app.use(express.json());
app.use('/api/cars', cars);
app.use('/api/availability', availability);

app.listen(8080, () => console.log('Listening on port 8080!'));
