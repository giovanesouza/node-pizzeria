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
        this.logado = false; // Utilizado para verificar se o usuário está logado no sistema
        this.ativo = true; // Ativa o perfil ao criar conta
    };


    // Métodos

    // Verifica se os dados do usuário existem e, caso localize, permite a entrada no sistema
    login = (email, password) => {

        // Verifica se o email e senha informados conferem
        if (email === this.email && password === this.senha) {

            // Permite acessar a conta apenas se o cadastro estiver ativo
            if (this.ativo) {
                console.log('✅ Usuário conectado!');
                console.log(`👋 Olá, ${this.nomeCompleto}. Seja bem vindo(a)!`);
                this.logado = true;

                return true;
            }

            console.log("⚠️  Cadastro desativado! \n Ative sua conta novamente para realizar o login.")
            return false;


            // Com base no email digitado, verifica se a senha do usuário bate com a cadastrada
        } else if (email === this.email && password !== this.senha) {

            console.log('❌ Senha incorreta!');
            return false;

            // Verifica se os campos não foram preenchidos
        } else if (email.trim() === "" || password.trim() === "") {
            console.log('⚠️ Os campos não podem ficar vazios.\nPreencha-os para realizar o login.');
            return false;
        }

        console.log('❌ Usuário não localizado!');

    };


    // Sai do sistema
    logout = () => {

        // Verifica se está logado
        if (this.logado) {
            console.log('🔌 Usuário desconectado!');
            this.logado = false;
        }

    };


    // Utilizado para realizar a exclusão lógica da conta
    deleteAccount = () => {
        // Se o usuário estiver logado e com perfil ativo -> Exclui conta
        if (this.logado && this.ativo) {

            console.log('✅ Cadastro excluído com sucesso!');

            this.ativo = false; // Desativa a conta
            this.logout(); // Sai da conta

            return true;
        }

        console.log('⚠️ Para excluir uma conta é necessário estar logado.')

    };


    // Reativa a conta
    reactivateAccount = (email, password) => {

        // Verifica se o email e senha informados conferem
        if (email === this.email && password === this.senha) {
            this.ativo = true; // Reativa a conta

            console.log('✅ Conta reativada com sucesso! \n Realize o login.')

            return true;
        }

        console.log('❌ Usuário não localizado! \n👀 Verifique se os dados foram inseridos corretamente.');

    }


}


// Exportando o arquivo para ser utilizado em outros arquivos
module.exports = {
    User
};
