const userService = require("../service/usuario.service");


const createUserController = async (req, res) => {
    try {
        return res.status(201).send(await userService.createUserService(req.body));
    } catch (err) {
        console.log(`erro: ${err.message}`);
        console.log(err.name)

        if (err.name == "MongoServerError")
            return res.status(400).send({ message: `Usuário já existe.` });

        return res.status(500).send({ error: `Tente novamente!` });
    }
};

const findUserByIdController = async (req, res) => {
    try {
        const user = await userService.findUserByIdService(req.params.id);

        if (!user) {
            return res.status(404).send({ message: "Usuario nao encontrado, tente novamente" });
        }

        return res.status(200).send(user);

    } catch (err) {
        if (err.kind == "ObjectId") {
            return res.status(400).send({ message: `ID informado, esta incorreto, tente novamente!` });
        }

        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado tente novamente!` });
    }
};

const findAllUsersController = async (req, res) => {
    try {
        return res.status(200).send(await userService.findAllUsersService());
    } catch (err) {
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado tente novamente!` });
    }
};

const findAllAddressController = async (req, res) => {
    try {
        const user = await userService.findUserByIdService(req.params.id);
        res.status(200).send(user.enderecos);
    } catch (err) {
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado tente novamente!` });
    }
};


const updateUserController = async (req, res) => {
    try {
        return res.send(await userService.updateUserService(req.params.id, req.body));
    } catch (err) {
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado tente novamente!` });
    }
};

const deleteUserController = async (req, res) => {
    try {

        const deletedUser = await userService.deleteUserService(req.params.id);

        console.log(deletedUser);

        if (deletedUser == null) {
            res.status(404).send({ message: `Usuário não encontrado. Tente novamente!` });
        } else {
            res.status(200).send({ message: `Usuário excluído com sucesso!` });
        }

    } catch (err) {
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado tente novamente!` });
    }
};

const addUserAddressController = async (req, res) => {
    try {
        const endereco = await userService.addAddressService(req.params.id, req.body);

        console.log(endereco)
        if (endereco == null) {
            res.status(400).send({ message: `Algo deu errado no endereço, tente novamente` });
        } else {
            res.status(201).send({ message: `Endereço adicionado com sucesso!` });
        }

    } catch (err) {
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado. Tente novamente!` });
    }
};

const removeUserAddressController = async (req, res) => {
    try {
        const endereco = await userService.removeAddressService(req.body.userId, req.body.addressId);
        let found = false;

        console.log(endereco)

        endereco.enderecos.map((valor) => {
            if (valor._id == req.body.addressId) {
                found = true;

            }
            console.log(valor._id)

        });

        if (found) {
            res.status(200).send({ message: `Endereço removido com sucesso!` });
        } else {
            res.status(400).send({ message: `Endereço não removido. Tente novamente` });
        }

    } catch (err) {
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado tente novamente!` });
    }
};

const addFavProdutoController = async (req, res) => {
    try {
        res.status(201).send(await userService.addFavProdutoService(req.params.id, req.body));
    } catch (err) {
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado tente novamente!` });
    }
};

const removeFavProdutoController = async (req, res) => {
    try {
        res.status(201).send(await userService.removeFavProdutoService(req.params.id, req.body));
    } catch (err) {
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado tente novamente!` });
    }
};

module.exports = {
    createUserController,
    findUserByIdController,
    findAllUsersController,
    findAllAddressController,
    updateUserController,
    deleteUserController,
    addUserAddressController,
    removeUserAddressController,
    addFavProdutoController,
    removeFavProdutoController
}