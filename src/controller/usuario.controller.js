const userService = require("../service/usuario.service");


const createUserController = async (req, res) => {
    try {
        const foundUserByEmail = await userService.findUserByEmailService(req.body.email);

        // Verifica se existe um usuário com o e-mail informado
        if (foundUserByEmail)
            return res.status(400).send({ message: "Já existe um usuário cadastrado com o email informado." });

        return res.status(201).send(await userService.createUserService(req.body));
    } catch (err) {
        console.log(`erro: ${err.message}`);
        console.log(err.name)

        return res.status(500).send({ error: `Tente novamente!` });
    }
};

const findUserByIdController = async (req, res) => {
    try {
        const user = await userService.findUserByIdService(req.params.id);

        if (!user) {
            return res.status(404).send({ message: "Usuário não encontrado. Tente novamente!" });
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
        return res.status(200).send(await userService.findAllUsersService(req.query.limit, req.query.offset));
    } catch (err) {
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado tente novamente!` });
    }
};

const findAllAddressController = async (req, res) => {
    try {
        const user = await userService.findUserByIdService(req.params.id);
        res.status(200).send({ usuario: user.nome, enderecos: user.enderecos });
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
        // Busca usuário com base no id informado
        const usuario = await userService.findUserByIdService(req.body.userId);

        // Verifica se há algum endereço com o id informado na requisição
        const addressFound = usuario.enderecos.some(endereco => endereco._id.toString() == req.body.addressId);

        // Se localizado, remove o endereço
        if (addressFound)
            return res.status(200).send(await userService.removeAddressService(req.body.userId, req.body.addressId));


        res.status(404).send({ message: "Endereço não localizado." });

    } catch (err) {
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado tente novamente!` });
    }
};

const addFavProdutoController = async (req, res) => {
    try {

        // Busca usuário por Id -> Utilizado para pegar os produtos favoritos
        const findUser = await userService.findUserByIdService(req.params.id);
        // console.log(findUser)

        // Verifica se há algum favorito com o _id informado na requisição
        const favoriteProductFound = findUser.produtos_fav.some(favorito => favorito._id.toString() == req.body._id);

        // console.log(favoriteProductFound)

        if (!favoriteProductFound)
            return res.status(201).send(await userService.addFavProdutoService(req.params.id, req.body))


        res.status(400).send({ message: "O produto já consta na lista de favoritos." });


    } catch (err) {
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado tente novamente!` });
    }
};

const removeFavProdutoController = async (req, res) => {
    try {
        // Busca usuário por Id -> Utilizado para pegar os produtos favoritos
        const findUser = await userService.findUserByIdService(req.params.id);

        // Verifica se há algum favorito com o _id informado na requisição
        const favoriteProductFound = findUser.produtos_fav.some(favorito => favorito._id.toString() == req.body._id);

        // Se localizado, remove 
        if (favoriteProductFound)
            return res.status(200).send(await userService.removeFavProdutoService(req.params.id, req.body));


        res.status(400).send({ message: "O produto não consta nos favoritos." });

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