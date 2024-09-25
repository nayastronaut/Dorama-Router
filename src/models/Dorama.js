const mongoose = require("mongoose")

const doramaSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    horario: {
        type: Number,
        required: true
    },
    genero: {
        type: String,
        required: true
    },
    data: {
        type: Number,
        required: true
    }
})

const Dorama = mongoose.model("Dorama", doramaSchema)

module.exports = Dorama