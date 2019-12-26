'use strict'

const Repoistory = require('../repository/player-repository')

exports.new = async (req, res, next) => {

    try {
        let player = req.query
        let data = 
        console.log(player)
        await Repoistory.new(player)
        res.status(200).send({
            message: "Player cadastrado com Sucesso"
        })

    } catch (e) {
        console.log(e)
        res.status(500).send({
            message:"Erro ao cadastrar player"
        })
        }
}

exports.list = async (req, res, next) => {

    try {
        let player = req.query.player
        let list =
        await Repoistory.list(player)
        res.status(200).send(list);
    } catch (e) {
        console.log(e)
        res.status(500).send({
            message:"Erro ao listar pontuação de players"
        })
    }
}