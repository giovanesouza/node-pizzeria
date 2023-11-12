const Categoria = require("../model/Categoria");

const createCategoryService = (body) => {
    return Categoria.create(body);
};

const findCategoryByIdService = (id) => {
    return Categoria.findById(id);
};

const findAllCategoriesService = () => {
    return Categoria.find();
};

const updateCategoryService = (id, body) => {
    return Categoria.findByIdAndUpdate(id, body, { returnDocument: "after" });
}

const deleteCategoryService = (id) => {
    return Categoria.findByIdAndDelete(id);
}

module.exports = {
    createCategoryService,
    findCategoryByIdService,
    findAllCategoriesService,
    updateCategoryService,
    deleteCategoryService
}