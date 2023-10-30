// Importação da classe Address 
const { Address } = require("./Address");

// Classe para os dados pessoais do cliente - herda as propriedades do endereço
class Person extends Address {
    constructor(fullName, cpf, birthday, cellPhone, street, number, neighborhood, city, state, zipCode) {
        super(street, number, neighborhood, city, state, zipCode); // Atributos da classe Mãe (Address)

        // Atributos específicos da Pessoa
        this.nomeCompleto = fullName;
        this.cpf = cpf;
        this.dataAniversario = birthday;
        this.telefone = cellPhone;
    };

};

// Exportando o arquivo para ser utilizado em outros arquivos
module.exports = {
    Person
};