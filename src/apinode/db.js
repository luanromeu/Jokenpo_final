'use strict'


const Sequelize = require('sequelize');
const sequelize = new Sequelize('tetsiste_jokenpo', 'tetsistemas_t', 'T&TSistemas2007', {
  host: '189.7.97.7',
  dialect: 'mysql',
  operatorsAliases: false,
  timezone: '-03:00', // for writing to database
  connectionTimeout:10000,
  logging: false
 });

sequelize
  .authenticate()
  .then(() => {
    console.log('---------------- Conexão Estabelecida Com Sucesso -----------------------'); 
  })
  .catch(err => {
    console.error('Erro ao Conectar Com Banco', err);
  });
    

module.exports = sequelize;
