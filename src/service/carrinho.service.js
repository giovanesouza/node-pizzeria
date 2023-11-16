const Carrinho = require("../model/Carrinho");

const findCartByIdService = (id) => {
    return Carrinho.findById(id);
};

const findAllCartsService = (limit, offset) => {
    return Carrinho.find().limit(limit).skip(offset);
};

const createCartService = (body) => {
    return Carrinho.create(body);
};

const updateCartService = (id, body) => {
    return Carrinho.findByIdAndUpdate(id, body, { returnDocument: "after" });
};

const deleteCartService = (id) => {
    return Carrinho.findByIdAndDelete(id);
};



const addProductCartService = (cartId, product) => {
    return Carrinho.findOneAndUpdate(
        {
            _id : cartId
        },
        {
            $push: {
                produtos: {
                    _id: product._id,
                    quantidade: product.quantidade
                },
            },
        },
        {
            returnDocument: "after",
        }
    );
};

const removeProductCartService = (cartId, product) => {
    return Carrinho.findOneAndUpdate(
        {
            _id: cartId,
        },
        {
            $pull: {
                produtos: {
                    _id: product._id,
                },
            },
        },
        {
            returnDocument: "after",
        }
    );
}

module.exports = {
    findCartByIdService,
    findAllCartsService,
    createCartService,
    updateCartService,
    deleteCartService,
    addProductCartService,
    removeProductCartService
}