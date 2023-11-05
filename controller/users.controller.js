const userService = require('../service/user.service');
const mongoose = require('mongoose');


// Cria um cadastro
const create = async (req, res) => {

    try {

        const user = req.body; // As informações serão passadas pelo corpo da requisição

        let userFound = await userService.findUserByEmail(user); // Verifica se o usuário existe


        if (userFound.length !== 0) {
            console.log(userFound)
            return res.status(400).send({message: "Já existe um usuário cadastrado com o e-mail informado."})

        }

        // Verificações

        // Todos os campos vazios
        if (Object.keys(user).length === 0) {
            return res.status(400).send({ message: "Os campos devem ser preenchidos." });
        }

        //Campos específicos não preenchidos
        if (!user.nome) {

            return res.status(400).send({ message: "O campo 'nome' deve ser preenchido." });

        } else if (!user.cpf) {

            return res.status(400).send({ message: "O campo 'cpf' deve ser preenchido." });

        } else if (!user.telefone) {

            return res.status(400).send({ message: "O campo 'telefone' deve ser preenchido." });

        } else if (!user.dataNasc) {

            return res.status(400).send({ message: "O campo 'dataNasc' deve ser preenchido." });

        } else if (!user.email) {

            return res.status(400).send({ message: "O campo 'email' deve ser preenchido." });

        } else if (!user.senha) {

            return res.status(400).send({ message: "O campo 'senha' deve ser preenchido." });

        }


        res.status(201).send(await userService.createUser(user));

    } catch (err) {
        console.log(`Erro: ${err}`);
        res.status(500).send({ message: "Erro no servidor. Tente novamente mais tarde!" })
    }


};


// Ler um cadastro
const find = async (req, res) => {

    try {

        const id = new mongoose.Types.ObjectId(req.params.id);

        const user = await userService.findUserById(id);

        // Se localizado..
        if (user != null) {
            return res.status(200).send(user); // Imprime os dados do usuário
        }

        // Caso não seja localizado
        return res.status(404).send({ message: "Usuário não localizado." });



    } catch (err) {
        console.log(`Erro: ${err}`);

        return res.status(500).send("Erro no servidor. Tente novamente mais tarde!"); // msg p/ serviço
    }


};


// Ler todos os cadastros
const findAll = async (req, res) => {

    return res.status(200).send(await userService.findAllUsers()); // Retorna todos os usuários cadastrados

};


// Atualiza um cadastro
const update = async (req, res) => {

    try {

        const id = req.params.id; // Configura um parâmetro chamado 'id' para ser passado na rota
        const user = req.body; // As informações serão passadas pelo corpo da requisição


        let userFound = await userService.findUserById(id); // Verifica se o usuário existe


        // Verificações

        // Verifica se os dados passados são iguais
        let isModified = userService.checkIfDataIsModified(user, userFound);

        console.log("São iguais? ", isModified)

        if (isModified) {
            return res.status(304).send({ message: "Nenhuma informação alterada." });
        }


        // Todos os campos vazios
        if (Object.keys(user).length === 0) {
            return res.status(400).send({ message: "Os campos precisam ser preenchidos." });
        }


        // Campos específicos não preenchidos
        if (!user.nome) {

            return res.status(400).send({ message: "O campo 'nome' deve ser preenchido." });

        } else if (!user.cpf) {

            return res.status(400).send({ message: "O campo 'cpf' deve ser preenchido." });

        } else if (!user.telefone) {

            return res.status(400).send({ message: "O campo 'telefone' deve ser preenchido." });

        } else if (!user.dataNasc) {

            return res.status(400).send({ message: "O campo 'dataNasc' deve ser preenchido." });

        } else if (!user.email) {

            return res.status(400).send({ message: "O campo 'email' deve ser preenchido." });

        } else if (!user.senha) {

            return res.status(400).send({ message: "O campo 'senha' deve ser preenchido." });

        }

        res.status(200).send(await userService.updateUser(id, user)); // Retorna o usuário atualizado

    } catch (err) {
        console.log(`Erro: ${err}`);
        res.status(500).send({ message: "Erro no servidor. Tente novamente mais tarde." })
    }

};


// Exclui um cadastro
const dalete = async (req, res) => {

    try {

        const id = req.params.id; // Configura um parâmetro chamado 'id' para ser passado na rota

        let userFound = await userService.findUserById(id); // Verifica se o usuário existe

        // Se existir, exclui
        if (userFound != null) {
            return res.status(200).send(await userService.daleteUser(id));
        }

        // Caso não exista, printa msg
        res.status(404).send({ message: "Usuário não localizado." })


    } catch (err) {
        console.log(`Erro: ${err}`)
        res.status(500).send({ message: "Erro no servidor. Tente novamente mais tarde." })
    }


};



// Exporta as funções 
module.exports = {
    create,
    find,
    findAll,
    update,
    dalete
}