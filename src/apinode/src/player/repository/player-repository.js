'use strict'

const Player = require('../models/player-model.js')

exports.new = async (player) => {

    try {
        let Round =
        await Player.build({
            Nome: player.player,
            Pontos: player.playerscore,
            comPontos: player.comscore
        })

     return  Round.save();

    } catch (e) {
        console.log(e)
        throw new Error(e)
    }
}

exports.list = async (player) => {

    try {
        console.log(player)
        let list =
        await Player.findAll({
            raw:true,
            order:[['id','DESC']],
            where:{
                Nome: player
            },
            limit:5
        })
        console.log(list)
        return list

    } catch (e) {
        console.log(e)
        throw new Error(e)
    }
}