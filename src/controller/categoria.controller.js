const categoriaService = require("../service/categoria.service");


const createCategoryController = async (req, res) => {
    try{
        res.status(201).send(await categoriaService.createCategoryService(req.body));
    }catch(err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!`});
    }
};


const findCategoryByIdController = async (req, res) => {
    try{
        res.status(200).send(await categoriaService.findCategoryByIdService(req.params.id));
    }catch(err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!`});
    }
};

const findAllCategoriesController = async (req, res) => {
    try{
        res.status(200).send(await categoriaService.findAllCategoriesService());
    }catch(err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!`});
    }
};


const updateCategoryController = async (req, res) => {
    try{
        res.status(200).send(await categoriaService.updateCategoryService(req.params.id, req.body));
    }
    catch(err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!`});
    }
}

const deleteCategoryController = async (req, res) => {
    try{
        res.status(200).send(await categoriaService.deleteCategoryService(req.params.id));
    }catch(err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!`});
    }
}

module.exports = {
    createCategoryController,
    findCategoryByIdController,
    findAllCategoriesController,
    updateCategoryController,
    deleteCategoryController
}