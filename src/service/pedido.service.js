const Pedido = require("../model/Pedido");
const Carrinho = require("../model/Carrinho");


const createOrderService = (body) => {
    return Pedido.create(body);
};

const findOrderByIdService = (id) => {
    return Pedido.findById(id);
};

const findAllOrdersService = (limit, offset) => {
    return Pedido.find().limit(limit).skip(offset);
};


const findAllOrdersByUserIdService = (userId, limit, offset) => {
    return Pedido.find({ userId }).limit(limit).skip(offset);
};

const getOrderInfoByIdService = (carrinhoId) => {
    return Carrinho.findById(carrinhoId);
};

const getAllOpenOrders = (limit, offset) => {
    return Pedido.find({concluido: false}).limit(limit).skip(offset);
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
    getAllOpenOrders,
    deleteOrderService,
    updateOrderStatusService
}