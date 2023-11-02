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
        ativo: true,
        dataCadastro: "YYYY-MM-DDTHH:MM:SS",
        dataAtualização: "YYYY-MM-DDTHH:MM:SS",

     */
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
    user.ativo = true; // Insere a chave 'ativo' com o valor true ao cadastrar o usuário

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

            res.send(value); // Retorna o registro com base no id informado
        }

    });

    // Caso não seja localizado...
    if(!found) {
        res.status(404).send({message: "Usuário não localizado."});
    }


};


// Ler todos os cadastros
const findAll = (req, res) => {

    res.send(users); // Retorna todos os usuários cadastrados

};


// Atualiza um cadastro
const update = (req, res) => {


};


// Exclui um cadastro
const dalete = (req, res) => {


};


// Exporta as funções 
module.exports = {
    create,
    find,
    findAll,
    update,
    dalete
}