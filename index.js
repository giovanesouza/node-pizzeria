// Importação da classe User que herda tudo da classe Person
const { User } = require("./User");


// Instanciando a classe User (Criando objeto)
const user = new User("Giovane Souza", "123.123.123-12", "1980-01-01", "(81) 98888-8888", "Rua Node Developer", "01", "Internet", "Web", "Pernambuco", "51123-12", "gs-node@gmail.com", "1234");

console.log(user); // Imprime objeto completo


// Dados do usuário de forma organizada -> Dados pessoais -> Endereço -> Usuário
const dataUser = {
    nomeCompleto: user.nomeCompleto,
    cpf: user.cpf,
    dataNascimento: user.dataNascimento,
    telefone: user.telefone,
    endereco: {
        logradouro: user.logradouro,
        numero: user.numero,
        bairro: user.bairro,
        cidade: user.cidade,
        uf: user.uf,
        cep: user.cep
    },
    email: user.email,
    senha: user.senha,
    admin: user.admin,
    ativo: user.ativo
};

console.log(dataUser); // Imprime os dados do usuário de forma organizada

// Converte os dados do usuário para JSON
/*
const json = JSON.stringify(dataUser);
console.log(json);
*/