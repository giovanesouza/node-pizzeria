// Importação da classe User que herda tudo da classe Person
const { User } = require("./User");


// Instanciando a classe User (Criando objeto)
const user = new User("Giovane Souza", "123.123.123-12", "1980-01-01", "(81) 98888-8888", "Rua Node Developer", "01", "Internet", "Web", "Pernambuco", "51123-12", "gs-node@gmail.com", "1234")

console.log(user); // Imprime objeto completo

