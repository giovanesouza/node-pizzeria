const produtoService = require("../service/produto.service");

const createProductController = async (req, res) => {
    try {
        // Busca produto pelo nome
        const productFound = await produtoService.findProductByNameService(req.body.nome);

        // Se localizado, não permite cadastrá-lo novamente 
        if (productFound)
            return res.status(400).send({ message: "O Produto já consta como cadastrado." });


        // Caso não exista, cadastra novo produto
        res.status(201).send(await produtoService.createProductService(req.body));

    } catch (err) {
        console.log(`erro: ${err.message}`);

        return res.status(500).send({ error: `Tente novamente!` });
    }
};

const findProductByIdController = async (req, res) => {
    try {
        const productFound = await produtoService.findProductByIdService(req.params.id);

        if (productFound == null)
            return res.status(404).send({ message: "Produto não localizado!" });

        res.status(200).send(productFound);
    } catch (err) {
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ error: `Tente novamente!` });
    }
};

const findAllProductsController = async (req, res) => {
    try {
        res.send(await produtoService.findAllProductsService());
    } catch (err) {
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ error: `Tente novamente!` });
    }
};

const updateProductController = async (req, res) => {
    try {
        const productFound = await produtoService.findProductByIdService(req.params.id);

        // Produto não localizado
        if (productFound == null)
            return res.status(404).send({ message: "Produto não localizado!" });

        // Produto localizado e atualizado
        res.status(200).send(await produtoService.updateProductService(req.params.id, req.body));

    } catch (err) {
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ error: `Tente novamente!` });
    }
};


const deleteProductController = async (req, res) => {
    try {
        const productFound = await produtoService.findProductByIdService(req.params.id);

        // Produto não localizado
        if (productFound == null)
            return res.status(404).send({ message: "Produto não localizado!" });

        // Produto localizado e excluído
        res.status(200).send(await produtoService.deleteProductService(req.params.id));
    } catch (err) {
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ error: `Tente novamente!` });
    }
};


const addProductCategoryController = async (req, res) => {
    try {
        res.status(200).send(await produtoService.addProductCategoryService(req.params.id, req.body));
    } catch (err) {
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!` });
    }
}

const removeProductCategoryController = async (req, res) => {
    try {
        res.status(200).send(await produtoService.removeProductCategoryService(req.params.id, req.body));
    } catch (err) {
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!` });
    }
}



module.exports = {
    createProductController,
    findProductByIdController,
    findAllProductsController,
    updateProductController,
    deleteProductController,
    addProductCategoryController,
    removeProductCategoryController
}