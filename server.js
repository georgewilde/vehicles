const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.get('/api/vehicle', (req, res) => {
    const vehicles = require('./server_api/vehicles.js');
    res.json(vehicles);
});

app.get('/api/vehicle/:id', (req, res) => {
    const vehicle = require('./server_api/vehicle_' + req.params.id + '.js');
    res.json(vehicle);
});

app.get('*', (req, res) => {
    res.render('index');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'dir')));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'layout.html'));
}).listen(3000);

console.log('Express server listening on port 3000');