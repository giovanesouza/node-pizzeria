// Importações
const mongoose = require("mongoose");


const ProdutoSchema = new mongoose.Schema({
   
    nome: { type: String, unique: true, required: true },
    descricao: { type: String, required: true },
    precoUnit: { type: Number, required: true },
    img: { type: String, default: "https://mrconfeccoes.com.br/wp-content/uploads/2018/03/default.jpg", required: true },
    categorias: [
        {
            _id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "categorias" },
            createAt: { type: Date, required: true, default: Date.now() }
        },
    ],
    createdAt: { type: Date, default: Date.now() },
});



const Produto = mongoose.model("produtos", ProdutoSchema);

module.exports = Produto;