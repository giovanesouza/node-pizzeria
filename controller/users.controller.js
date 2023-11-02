// Utilizado para guardar os registros
const users = [
    {
        id: 1,
        email: "usuario1@api.com.br",
        senha: "1234"
    },
    {
        id: 2,
        email: "usuario2@api.com.br",
        senha: "4321"
    },
    {
        id: 3,
        email: "usuario3@api.com.br",
        senha: "96513"
    }
];


// Cria um cadastro
const create = (req, res) => {

};


// Ler um cadastro
const find = (req, res) => {
    
    const id = req.params.id; // Configura um parâmetro chamado id para ser passado na rota

    res.send(`Rota find, com o id: ${id}`);

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