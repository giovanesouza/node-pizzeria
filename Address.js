// Classe para Endereço completo
class Address {
    constructor(street, number, neighborhood, city, state, zipCode) {
        this.logradouro = street;
        this.numero = number;
        this.bairro = neighborhood;
        this.cidade = city;
        this.uf = state;
        this.cep = zipCode;
    };
};

// Exportando o arquivo para ser utilizado em outros arquivos
module.exports = {
    Address
};