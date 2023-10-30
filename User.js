// Importação da classe Person que herda tudo da classe Address
const { Person } = require("./Person");

// Usuário herda tudo da classe Person
class User extends Person {
    constructor(fullName, cpf, birthday, cellPhone, street, number, neighborhood, city, state, zipCode, email, password) {
        super(fullName, cpf, birthday, cellPhone, street, number, neighborhood, city, state, zipCode);

        // Atributos específicos do Usuário
        this.email = email;
        this.senha = password;
        this.admin = false; // Cadastra como não admin
        this.ativo = true; // Ativa o perfil ao criar conta
    };

}


// Exportando o arquivo para ser utilizado em outros arquivos
module.exports = {
    User
};
