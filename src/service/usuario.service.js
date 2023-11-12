const Usuario = require("../model/Usuario");


const createUserService = (body) => {
    return Usuario.create(body);
}

const findUserByIdService = (id) => {
    return Usuario.findById(id);
}

const findAllUsersService = () => {
    return Usuario.find();
}

const updateUserService = (id, body) => {
    return Usuario.findByIdAndUpdate(id, body, { returnDocument: "after" });
}

const deleteUserService = (id) => {
    return Usuario.findByIdAndDelete(id);
}

const addAddressService = (id, endereco) => {
    return Usuario.findOneAndUpdate(
        {
            _id: id,
        },
        {
            $push:{
                enderecos: endereco,
            }
        },
        {
            rawResult: true,
        }
    );
}

const removeAddressService = (id, addressId) => {
    return Usuario.findOneAndUpdate(
        {
            _id: id,
        },
        {
            $pull:{
                enderecos: {
                    _id: addressId
                },
            }
        },
        {
            rawResult: true,
        }
    );
}

const addFavProdutoService = (id, produto) => {
    console.log(produto)
    return Usuario.findOneAndUpdate(
        {
            _id: id,
        },
        {
            $push: {
                produtos_fav:{
                    _id: produto._id,
                }
            }
        },
        {
            rawResult: true,
        }
    );
}

const removeFavProdutoService = (id,produto) => {
    return Usuario.findOneAndUpdate(
        {
            _id: id,
        },
        {
            $pull: {
                produtos_fav:{
                    _id: produto._id,
                }
            }
        },
        {
            rawResult: true,
        }
    );
}

module.exports = {
    createUserService,
    findUserByIdService,
    findAllUsersService,
    updateUserService,
    deleteUserService,
    addAddressService,
    removeAddressService,
    addFavProdutoService,
    removeFavProdutoService
}