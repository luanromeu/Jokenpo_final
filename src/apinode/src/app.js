'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const Sequelize = require('sequelize');



// Define tamnaho maximo JSON 
app.use(bodyParser.json({
  limit: '10mb'
}));
app.use(bodyParser.urlencoded({
  extended: false
}));

// Habilita o CORS
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header ('Access-Control-Allow-Credentials'), true
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});


var loadLocar = async () => {

const dbplayer = await require ('../db')
const modelplayer = await require ('../src/player/models/player-model')

const routesplayers = await require('../src/player/routes/player-route')
app.use('/players', routesplayers)
return;

}

loadLocar();


module.exports = app;


