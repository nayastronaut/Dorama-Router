const Dorama = require('../models/Dorama')

async function cadastrarDorama(req,res) {
    const { nome, horario, genero, data } = req.body
    try {
        const novoDorama = new Dorama({ nome, horario, genero, data })
        const doramaSalvo = await novoDorama.save()
        res.status(201).json({
            mensagem: "Dorama cadastrado com sucesso!",
            dorama: doramaSalvo
        })
    } catch (erro) {
        res.status(500).json({
            mensagem: "Erro ao cadastrar dorama",
            erro: erro.message
        })
    }
}

async function buscarDorama(req,res) {
    try{
        const doramas = await Dorama.find()
        res.status(200).json(doramas)
    } catch (erro) {
        res.status(500).json({
            mensagem: "Erro ao buscar doramas",
            erro: erro.message
        })
    }
}

async function atualizarDorama(req, res) {
    const { id } = req.params
    const { nome, horario, genero, data } = req.body
    try {
        const doramaAtualizado = await Dorama.findByIdAndUpdate(
            id,
            { nome, horario, genero, data },
            { new: true, runValidators: true }
        )

        if (doramaAtualizado) {
            res.status(200).json({
                mensagem: "Dorama atualizado com sucesso!",
                livro: doramaAtualizado
            })
        } else {
            res.status(404).json({
                mensagem: "Dorama não encontrado!"
            })
        }
    } catch (erro) {
        res.status(500).json({
            mensagem: "Erro ao atualizar dorama!",
            erro: erro.message
        })
    }
}

async function deletarDorama(req, res) {
    const { id } = req.params
    try {
        const doramaDeletado = await Dorama.findByIdAndDelete(id)

        if (doramaDeletado) {
            res.status(200).json({
                mensagem: "Dorama deletado com sucesso!",
                dorama: doramaDeletado
            })
        } else {
            res.status(404).json({
                mensagem: "Dorama não encontrado!"
            })
        }
    }catch (erro) {
        res.status(500).json({
            mensagem: "Erro ao deletar dorama!",
            erro: erro.message
        })
    }
}

module.exports ={
    cadastrarDorama,
    buscarDorama,
    atualizarDorama,
    deletarDorama
}