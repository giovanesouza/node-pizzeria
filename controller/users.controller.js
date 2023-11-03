// Utilizado para guardar os registros
const users = [
    // Informações que precisam ser passadas no corpo da requisição
    /*
    {
        id: ,
        nome: "",
        cpf: "",
        telefone: "",
        dataNasc: "",
        email: "",
        senha: "",
    }
    */


    /*  Informações inseridas automaticamente
        dataCadastro: "YYYY-MM-DDTHH:MM:SS",
        dataAtualização: "YYYY-MM-DDTHH:MM:SS",

     */
        {
            "id": 1,
            "nome": "Giovane Souza",
            "cpf": "123.123.123-12",
            "telefone": "81 98888-8888",
            "dataNasc": "1890-01-01",
            "email": "usuario1@gmail.com",
            "senha": "user1"
          }
];


// Utilizada para inserir a data ao se cadastrar e ao atualizar os dados
const currentDate = () => {

    const date = new Date();

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;

}



// Cria um cadastro
const create = (req, res) => {

    const user = req.body; // As informações serão passadas pelo corpo da requisição

    // Verificações

    // Todos os campos vazios
    if (Object.keys(user).length === 0) {
        return res.status(400).send({ message: "Os campos precisam ser preenchidos." });
    }


    //Campos específicos não preenchidos
    if (!user.id) {
        return res.status(400).send({ message: "O campo 'id' deve ser preenchido." });
    }


    // Verifica se já existe um registro com o mesmo ID e evita duplicidade
    const existingUser = users.find((existingUser) => existingUser.id === user.id);

    if (existingUser) {
        return res.status(409).send({ message: "O usuário já está cadastrado." });
    }


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


    user.dataCadastro = currentDate(); // Pega a data/hora que o cadastro foi realizado e salva no usuário

    users.push(user); // Insere novo cadastro na lista

};


// Ler um cadastro
const find = (req, res) => {

    const id = req.params.id; // Configura um parâmetro chamado 'id' para ser passado na rota

    let found = false;

    // Percorre o array de objetos (users) para verificar se há um registro com o id informado na requisição
    users.map(value => {

        if (value.id == id) {
            found = true;

            return res.send(value); // Retorna o registro com base no id informado
        }

    });

    // Caso não seja localizado...
    if (!found) {
        res.status(404).send({ message: "Usuário não localizado." });
    }


};


// Ler todos os cadastros
const findAll = (req, res) => {

    res.send(users); // Retorna todos os usuários cadastrados

};


// Atualiza um cadastro
const update = (req, res) => {

    const id = req.params.id; // Configura um parâmetro chamado 'id' para ser passado na rota
    const user = req.body; // As informações serão passadas pelo corpo da requisição

    let found = false;


    // Verificações

    // Todos os campos vazios
    if (Object.keys(user).length === 0) {
        return res.status(400).send({ message: "Os campos precisam ser preenchidos." });
    }


    // Campos específicos não preenchidos
    if (!user.id) {

        return res.status(400).send({ message: "O campo 'id' deve ser preenchido." });

    } else if (!user.nome) {

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


    // Percorre o array de objetos (users) para verificar se há um registro com o id informado na requisição
    users.map((value, index) => {

        if (value.id == id) {
            found = true;

            users[index] = user; // Atualiza os dados do usuário

            users[index].dataCadastro = value.dataCadastro; // Mantém os dados com a data/hora do cadastro
            users[index].dataAtualizacao = currentDate(); // Pega a data/hora que da atualização e salva no usuário

            return res.send(users[index]); // Retorna o registro atualizado
        }

    });

    // Caso não seja localizado...
    if (!found) {
        res.status(404).send({ message: "Usuário não localizado." });
    }


};


// Exclui um cadastro
const dalete = (req, res) => {

    const id = req.params.id; // Configura um parâmetro chamado 'id' para ser passado na rota

    let found = false;


    // Percorre o array de objetos (users) para verificar se um registro com o id informado na requisição
    users.map((value, index) => {

        if (value.id == id) {
            found = true;

            users.splice(index, 1); // Remove um pedaço do array, no caso, o objeto (user) com o id informado

            return res.send(value); // Retorna o registro removido
        }

    });


    // Caso não seja localizado...
    if (!found) {
        res.status(404).send({ message: "Usuário não localizado." });
    }

};


// Utilizado para realizar o login - necessário passar o email e senha no corpo da requisição
const login = (req, res) => {

    const user = req.body; // As informações serão passadas pelo corpo da requisição

    // Verificações de preenchimento de campos
    if (!user.email) {
        
        return res.status(400).send({ message: "O campo 'email' deve ser preenchido." });

    } else if (!user.senha) {

        return res.status(400).send({ message: "O campo 'senha' deve ser preenchido." });

    }


    // Verifica se existe um registro com o email e senha passados no corpo da requisição

    const existingUser = users.find((existingUser) => existingUser.email === user.email && existingUser.senha === user.senha);

    if (existingUser) {
        // Retorna a msg de logado + nome do usuário + dados do login (email e senha)
        return res.send({ message: "Usuário logado com sucesso!", nome: existingUser.nome, login: user});
    }
    
    return res.status(404).send({ message: "Usuário não localizado." });


};





// Exporta as funções 
module.exports = {
    create,
    find,
    findAll,
    update,
    dalete,
    login
}