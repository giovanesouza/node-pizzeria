const Produto = require("../model/Produto");


const createProductService = (body) => {
    return Produto.create(body);
};


const findProductByIdService = (id) => {
    return Produto.findById(id);
};

const findProductByNameService = (productName) => {
    return Produto.findOne({ nome: productName });
};

const findAllProductsService = (limit, offset) => {
    return Produto.find().limit(limit).skip(offset);
};

const updateProductService = (id, body) => {
    return Produto.findByIdAndUpdate(id, body, { returnDocument: "after" });
};

const deleteProductService = (id) => {
    return Produto.findByIdAndDelete(id);
};


const addProductCategoryService = (productId, category) => {
    return Produto.findOneAndUpdate(
        {
            _id: productId
        },
        {
            $push: {
                categorias: {
                    _id: category._id,
                    createdAt: category.createdAt
                },
            },
        },
        {
            returnDocument: "after",
        }
    );
};

const removeProductCategoryService = (productId, category) => {
    return Produto.findOneAndUpdate(
        {
            _id: productId,
        },
        {
            $pull: {
                categorias: {
                    _id: category._id,
                },
            },
        },
        {
            returnDocument: "after",
        }
    );
};


module.exports = {
    createProductService,
    findProductByIdService,
    findProductByNameService,
    findAllProductsService,
    updateProductService,
    deleteProductService,
    addProductCategoryService,
    removeProductCategoryService
}
