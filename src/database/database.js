const mongoose = require("mongoose");

function connectToDatabase() {
    mongoose.connect(process.env.URLDATABASE,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("MongoDB conectado!");
    }).catch((err) => {
        return console.log(`Erro na conexão com o banco: ${err}`);
    });
};

module.exports = connectToDatabase;