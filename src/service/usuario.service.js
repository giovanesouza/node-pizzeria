const Usuario = require("../model/Usuario");


const createUserService = (body) => {
    return Usuario.create(body);
};

const findUserByIdService = (id) => {
    return Usuario.findById(id);
};

const findUserByEmailService = (bodyEmail) => {
    return Usuario.findOne({ email: bodyEmail });
};

const findAllUsersService = (limit, offset) => {
    return Usuario.find().limit(limit).skip(offset);
};

const updateUserService = (id, body) => {
    return Usuario.findByIdAndUpdate(id, body, { returnDocument: "after" });
};

const deleteUserService = (id) => {
    return Usuario.findByIdAndDelete(id);
};

const addAddressService = (userId, endereco) => {
    return Usuario.findOneAndUpdate(
        {
            _id: userId,
        },
        {
            $push: {
                enderecos: endereco,
            }
        },
        {
            returnDocument: "after"
        }
    );
};

const removeAddressService = (userId, addressId) => {
    return Usuario.findOneAndUpdate(
        {
            _id: userId,
        },
        {
            $pull: {
                enderecos: {
                    _id: addressId
                },
            }
        },
        {
            returnDocument: "after"
        }
    );
};

const addFavProdutoService = (userId, produto) => {
    return Usuario.findOneAndUpdate(
        {
            _id: userId,
        },
        {
            $push: {
                produtos_fav: {
                    _id: produto._id,
                }
            }
        },
        {
            returnDocument: "after",
        }
    );
};

const removeFavProdutoService = (userId, produto) => {

    return Usuario.findOneAndUpdate(
        {
            _id: userId,
        },
        {
            $pull: {
                produtos_fav: {
                    _id: produto._id,
                }
            }
        },
        {
            returnDocument: "after"
        }
    );
};

module.exports = {
    createUserService,
    findUserByIdService,
    findUserByEmailService,
    findAllUsersService,
    updateUserService,
    deleteUserService,
    addAddressService,
    removeAddressService,
    addFavProdutoService,
    removeFavProdutoService
}