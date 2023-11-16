const Categoria = require("../model/Categoria");

const createCategoryService = (body) => {
    return Categoria.create(body);
};

const findCategoryByIdService = (id) => {
    return Categoria.findById(id);
};

const findCategoryByNameService = (categoryName) => {
    return Categoria.findOne({ nome: categoryName });
};

const findAllCategoriesService = (limit, offset) => {
    return Categoria.find().limit(limit).skip(offset);
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
    findCategoryByNameService,
    findAllCategoriesService,
    updateCategoryService,
    deleteCategoryService
}