// Importações
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UsuarioSchema = new mongoose.Schema({

    nome: { type: String, required: true },
    telefone: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    senha: { type: String, required: true },
    imagem: { type: String, default: "https://www.if.ufrgs.br/if/wp-content/uploads/2018/05/default-profile.png", required: false },
    enderecos: [
        {
            rua: { type: String, required: true },
            numero: { type: String, required: true },
            complemento: { type: String, required: false },
            cep: { type: String, required: true },
            createdAt: { type: Date, required: true, default: Date.now() },
        }
    ],
    produtos_fav: [
        {
            _id: { type: mongoose.Schema.Types.ObjectId, unique: true, required: true, ref: "produtos"},
            createdAt: { type: Date, required: true, default: Date.now() },
        }
    ],
    createdAt: { type: Date, required: true, default: Date.now() },
    admin: { type: Boolean, required: true, default: false },
});


UsuarioSchema.pre("save", async function (next) {
    if (this.senha) {
        this.senha = await bcrypt.hash(this.senha, 10);
    }
    next();
});


UsuarioSchema.pre("findOneAndUpdate", async function (next) {
    if (this._update.senha) {
        this._update.senha = await bcrypt.hash(this._update.senha, 10);
    }
    next();
});

const Usuario = mongoose.model("usuarios", UsuarioSchema);

module.exports = Usuario;