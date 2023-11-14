const mongoose = require("mongoose");

const PedidoSchema = new mongoose.Schema({

    carrinhoId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "carrinhos" },
    userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "usuarios" },
    formaPagamento: { type: String, required: true },
    concluido: { type: Boolean, default: false, required: true },
    createdAt: { type: Date, required: true, default: Date.now() }

});

const Pedido = mongoose.model("pedidos", PedidoSchema);

module.exports = Pedido;

