const sequelize = require('../../../db');
const Sequelize = require('sequelize');

const players = sequelize.define('players', {
  
    Nome: {
        type: Sequelize.STRING,
        defaultValue: null
    },
    Pontos: {
        type: Sequelize.STRING,
        defaultValue: null,
    },
    comPontos: {
        type: Sequelize.STRING,
        defaultValue: null,
    },
  
    
});

// force: Se True , Substiu a tabela existente
players.sync({ force: false }).then(() => {

    // Retorna Tabela Criada
    return players;

});

module.exports = players;
