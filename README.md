# Criação de objeto para representar um Usuário

## Sobre o projeto

O objetivo deste projeto é criar um objeto para representar um usuário. 
Para tanto, foram criados **quatro arquivos**, sendo **três** para **representar as classes** (`Address.js`, `Person.js` e `User.js`) e um `index.js` que fica responsável pela execução do programa.

### Descrição dos arquivos

1. `Address.js`: Utilizada para informações cadastrais referentes ao endereço - **logradouro, número, bairro, cidade, uf e cep**.

1. `Person.js`: Esta classe herda os atributos da classe `Address.js`, permitindo criar um objeto com dados de uma pessoa - **nomeCompleto, cpf, dataNascimento e telefone** - + os dados do endereço.

1. `User.js`: Herda tudo de `Person.js` e contém seus atributos específicos - **email, senha, admin?, logado?, perfil ativo?**.

#### Métodos implementados (User)
* `login()`: Permite realizar o login utilizando um e-mail e senha válidos - o atributo **logado** passa a ser `true`;
* `logout()`: Desloga o usuário da conta - o atributo **logado** passa a ser `false`;
* `deleteAccount()`: Realiza exclusão lógica da conta (mantém os dados no sistema) - o atributo **ativo** passa a ser `false` e chama o método `logout()` - impede que o usuário realize login;
* `reactivateAccount()`: Permite reativar a conta utilizando o email e senha cadastrados - o atributo **ativo** passa a ser `true` e permite que o usuário realize login.


4. `index.js`: Neste arquivo acontece o instanciamento do usuário + modificação na organização dos dados do objeto.


> Para fins de organização, cada classe foi criada em um arquivo isolado, sendo exportada e utilizada no local necessário para o funcionamento do programa.


## Resultado obtido

![Resultado: Usuário criado](screenshots/objeto.jpg "Resultado do objeto com os dados do usuário criado.")

![Resultado: Usuário logado](screenshots/login.jpg "Resultado chamada do método login().")

![Resultado: Usuário deslogado](screenshots/logout.jpg "Resultado chamada do método logout().")

![Resultado: Exclusão lógica de conta](screenshots/deleteAccount.jpg "Resultado chamada do método deleteAccount().")

![Resultado: Reativação de conta](screenshots/reactivateAccount.jpg "Resultado chamada do método reactivateAccount().")