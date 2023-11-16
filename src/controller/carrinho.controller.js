const carrinhoService = require("../service/carrinho.service");

const createCartController = async (req, res) => {
    try {
        const corpo = {
            ...req.body,
            userId: req.userId
        }
        res.status(201).send(await carrinhoService.createCartService(corpo));
    } catch (err) {
        res.status(500).send({ message: "Erro inesperado, tente novamente!" });
        console.log(err.message);
    }
};

const findCartByIdController = async (req, res) => {
    try {
        const cartFound = await carrinhoService.findCartByIdService(req.params.id);

        // Se o carrinho for localizado, exibe-o
        if (cartFound)
            return res.status(200).send(cartFound);

        // Se não localizado, exibe a msg
        res.status(404).send({ message: "Carrinho não localizado!" });
    } catch (err) {
        res.status(500).send({ message: "Erro inesperado, tente novamente!" });
        console.log(err.message);
    }
};

const findAllCartsController = async (req, res) => {
    try {
        res.status(200).send(await carrinhoService.findAllCartsService(req.query.limit, req.query.offset));
    } catch (err) {
        res.status(500).send({ message: "Erro inesperado, tente novamente!" });
        console.log(err.message);
    }
};


const updateCartController = async (req, res) => {
    try {
        const cartFound = await carrinhoService.findCartByIdService(req.params.id);

        // Se localizado, atualiza
        if (cartFound)
            return res.send(await carrinhoService.updateCartService(req.params.id, req.body));

        console.log(cartFound)

        // Não localizado, exibe a msg
        res.status(404).send({ message: "Carrinho não localizado!" });
    } catch (err) {
        res.status(500).send({ message: "Erro inesperado, tente novamente!" });
        console.log(err.message);
    }
};

const deleteCartController = async (req, res) => {
    try {
        const cartFound = await carrinhoService.deleteCartService(req.params.id);

        if (cartFound)
            return res.status(200).send(cartFound);

        res.status(400).send({ message: "Carrinho não existe." });
    } catch (err) {
        res.status(500).send({ message: "Erro inesperado, tente novamente!" });
        console.log(err.message);
    }
};

const addProductCartController = async (req, res) => {
    try {
       // Busca o carrinho
       const cartFound = await carrinhoService.findCartByIdService(req.params.id);

       // Se o carrinho for localizado, verifica se o produto passado no corpo da req já está no carrinho
       if (cartFound) {
           const productCart = cartFound.produtos.some(produto => produto._id == req.body._id);

           // Se já estiver, não permite add novamente
           if (productCart) {
               return res.status(400).send({ message: "O produto já está no carrinho." });

           } else {
               // Add produto
               return res.status(200).send(await carrinhoService.addProductCartService(req.params.id, req.body));
           }
       };

       // Caso o carrinho não seja localizado, exibe a msg
       res.status(404).send({ message: "Carrinho não localizado!" });
    } catch (err) {
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!` });
    }
};

const removeProductCartController = async (req, res) => {
    try {
        // Busca o carrinho
        const cartFound = await carrinhoService.findCartByIdService(req.params.id);

        // Se o carrinho for localizado, verifica se o produto passado no corpo da req está no carrinho
        if (cartFound) {
            const productCart = cartFound.produtos.some(produto => produto._id == req.body._id);

            // Produto localizado: remove-o
            if (productCart) {
                return res.status(200).send(await carrinhoService.removeProductCartService(req.params.id, req.body));

            } else {
                // Não localizado, exibe a msg 
                return res.status(404).send({ message: "Produto não localizado!" });
            }
        };

        // Caso o carrinho não seja localizado, exibe a msg
        res.status(404).send({ message: "Carrinho não localizado!" });
    } catch (err) {
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!` });
    }
};

module.exports = {
    createCartController,
    findCartByIdController,
    findAllCartsController,
    updateCartController,
    deleteCartController,
    addProductCartController,
    removeProductCartController
}