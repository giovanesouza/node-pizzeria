const pedidoService = require("../service/pedido.service");


const createOrderController = async (req, res) => {
    try {
        const corpo = {
            ...req.body,
            userId: req.userId
        }
        res.status(201).send(await pedidoService.createOrderService(corpo));
    } catch (err) {
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!` });
    }
};

const findOrderByIdController = async (req, res) => {
    try {
        const pedido = await pedidoService.findOrderByIdService(req.params.id);

        if (pedido != null)
            return res.status(200).send(pedido)


        res.status(404).send({ message: "Pedido não localizado!" });

    } catch (err) {
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!` });
    }
};

const findAllOrdersController = async (req, res) => {
    try {
        const pedidos = await pedidoService.findAllOrdersService();

        if (pedidos.length != 0)
            return res.status(200).send(pedidos);


        return res.status(404).send({ message: "Nenhum pedido realizado!" });

    } catch (err) {
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ error: `Erro inesperado, tente novamente!` });
    }
};

const updateOrderStatusController = async (req, res) => {
    try {
        const pedido = await pedidoService.updateOrderStatusService(req.params.id);

        if (pedido != null)
            return res.status(200).send(pedido);

        res.status(404).send({ message: "Pedido não localizado!" });

    } catch (err) {
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ error: `Erro inesperado, tente novamente!` });
    }
};

const deleteOrderController = async (req, res) => {
    try {
        const pedido = await pedidoService.deleteOrderService(req.params.id);

        if (pedido != null)
            return res.status(200).send(pedido);

        res.status(404).send({ message: "Pedido não localizado!" });
    } catch (err) {
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ error: `Erro inesperado, tente novamente!` });
    }
};


module.exports = {
    createOrderController,
    findOrderByIdController,
    findAllOrdersController,
    updateOrderStatusController,
    deleteOrderController
}