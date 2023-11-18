const pedidoService = require("../service/pedido.service");
const { findUserByIdService } = require("../service/usuario.service")


const createOrderController = async (req, res) => {
    try {
        // Pega todos os pedidos do usuário logado
        const ordersFound = await pedidoService.findAllOrdersByUserIdService(req.userId);

        // Verifica se o carrinho já foi add aos pedidos
        const cartFound = ordersFound.some(carrinho => carrinho.carrinhoId == req.body.carrinhoId);

        // Caso localizado, exibe msg
        if (cartFound)
            return res.status(400).send({ message: "O pedido já foi realizado." });


        // Caso não localize, realiza pedido com o carrinho informado
        const body = {
            ...req.body,
            userId: req.userId
        }

        res.status(201).send(await pedidoService.createOrderService(body));
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
        const pedidos = await pedidoService.findAllOrdersService(req.query.limit, req.query.offset);

        if (pedidos.length != 0)
            return res.status(200).send(pedidos);


        return res.status(404).send({ message: "Nenhum pedido realizado!" });

    } catch (err) {
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ error: `Erro inesperado, tente novamente!` });
    }
};

const findAllOrdersByUserIdController = async (req, res) => {
    try {
        // Verifica se o usuário existe
        const userFound = await findUserByIdService(req.params.id);

        if (userFound) {
            // Pega todos os pedidos do usuário
            const pedidos = await pedidoService.findAllOrdersByUserIdService(req.params.id, req.query.limit, req.query.offset);

            // Verifica se há pedidos
            if (pedidos.length != 0)
                return res.status(200).send(pedidos);

            // Exibe msg abaixo caso não tenha pedido
            return res.status(404).send({ message: "Nenhum pedido realizado!" });
        }

        res.status(404).send({message: "Usuário não localizado."});

    } catch (err) {
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ error: `Erro inesperado, tente novamente!` });
    }
};


const getOrderInfoByIdController = async (req, res) => {
    try {
        const infoPedido = await pedidoService.getOrderInfoByIdService(req.params.id);

        console.log(infoPedido)

        if (infoPedido != null)
            return res.status(200).send(infoPedido);


        return res.status(404).send({ message: "Pedido não localizado" });

    } catch (err) {
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ error: `Erro inesperado, tente novamente!` });
    }
};

const getAllOpenOrdersController = async (req, res) => {
    try {
        // Retorna todos os produtos que estão com o campo concluído = false (em aberto)
        return res.status(200).send(await pedidoService.getAllOpenOrders(req.query.limit, req.query.offset));
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
    findAllOrdersByUserIdController,
    getOrderInfoByIdController,
    getAllOpenOrdersController,
    updateOrderStatusController,
    deleteOrderController
}