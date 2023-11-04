const mongoose = require('mongoose'); // Importa o mongoose

// Define Schema -> a forma do documento dentro da coleção
const userSchema = new mongoose.Schema({

    nome: { type: String, required: true },
    cpf: { type: String, unique: true, required: true },
    telefone: { type: String, required: true },
    dataNasc: { type: Date, required: true },
    email: { type: String, unique: true, required: true },
    senha: { type: String, required: true },


}, { timestamps: true }); // { timestamps: true } -> Cria um atributo createdAt (ao criar um documento) e updatedAt (ao atualizá-lo)


// Cria Modelo -> ('nomeColeção', nomeSchema)
const User = mongoose.model('user', userSchema);


module.exports = User; // Exporta 