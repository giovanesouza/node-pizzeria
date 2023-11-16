const categoriaService = require("../service/categoria.service");


const createCategoryController = async (req, res) => {
    try {
        const categoryFound = await categoriaService.findCategoryByNameService(req.body.nome);

        // Se encontrar a categoria, não adiciona (evita duplicação)
        if (categoryFound)
            return res.status(400).send({ message: "A categoria já existe." });

        // Cria nova categoria
        res.send(await categoriaService.createCategoryService(req.body));

    } catch (err) {
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!` });
    }
};


const findCategoryByIdController = async (req, res) => {
    try {
        const category = await categoriaService.findCategoryByIdService(req.params.id);

        // Caso não localize a categoria, exibe msg abaixo
        if (category == null)
            return res.status(404).send({ message: "Categoria não localizada." })

        // Se localizada, exibe a categoria
        res.status(200).send(category);
    } catch (err) {
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!` });
    }
};

const findAllCategoriesController = async (req, res) => {
    try {
        res.status(200).send(await categoriaService.findAllCategoriesService(req.query.limit, req.query.offset));
    } catch (err) {
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!` });
    }
};


const updateCategoryController = async (req, res) => {
    try {
        const categoryFound = await categoriaService.findCategoryByIdService(req.params.id);

        // Se encontrar a categoria, permite atualização
        if (categoryFound)
            return res.status(200).send(await categoriaService.updateCategoryService(req.params.id, req.body));

        // Caso não localize, exibe a msg abaixo
        res.status(404).send({message: "Categoria não encontrada."});

    }
    catch (err) {
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!` });
    }
}

const deleteCategoryController = async (req, res) => {
    try {  
        const categoryFound = await categoriaService.findCategoryByIdService(req.params.id);

        // Se encontrar a categoria, a exclui
        if (categoryFound)
            return res.status(200).send(await categoriaService.deleteCategoryService(req.params.id));

        // Caso não localize, exibe a msg abaixo
        res.status(404).send({message: "Categoria não encontrada."});

    } catch (err) {
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!` });
    }
}

module.exports = {
    createCategoryController,
    findCategoryByIdController,
    findAllCategoriesController,
    updateCategoryController,
    deleteCategoryController
}