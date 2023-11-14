const Pedido = require("../model/Pedido");
const Carrinho = require("../model/Carrinho");


const createOrderService = (body) => {
    return Pedido.create(body);
};

const findOrderByIdService = (id) => {
    return Pedido.findById(id);
};

const findAllOrdersService = () => {
    return Pedido.find();
};


const findAllOrdersByUserIdService = (userId) => {
    return Pedido.find({ userId });
};

const getOrderInfoByIdService = (carrinhoId) => {
    return Carrinho.findById(carrinhoId);
};


const deleteOrderService = (id) => {
    return Pedido.findByIdAndDelete(id);
};

const updateOrderStatusService = (id) => {
    return Pedido.findOneAndUpdate({ _id: id }, { $set: { concluido: true } }, { returnDocument: "after" });
}

module.exports = {
    createOrderService,
    findOrderByIdService,
    findAllOrdersService,
    findAllOrdersByUserIdService,
    getOrderInfoByIdService,
    deleteOrderService,
    updateOrderStatusService
}