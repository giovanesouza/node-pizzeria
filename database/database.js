const mongoose = require('mongoose');

// Função de conexão
function connectToDataBase() {

    mongoose.connect('mongodb://localhost:27017/usuarios', {
        // Configurações que o mongo precisa para questões de compatibilidade

        useNewUrlParser: true, // Conversão das URL
        useUnifiedTopology: true // Tipologia unificada


        // Se der tudo certo -> .then()
    }).then(() => {

        console.log("MongoDB conectado!");

        // Caso dê erro ->  catch()
    }).catch((err) => {

        return console.log(`Erro na conexão com o banco: ${err}`);

    })

}


// Exporta conexão
module.exports = connectToDataBase;