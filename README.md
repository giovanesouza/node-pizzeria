# Projeto Express CRUD com Banco de Dados (MongoDB)

## Como visualizar o projeto localmente?

### Pré-requesitos:

>[!IMPORTANT]
> 
> * [x] Ter o git instalado na máquina;
> * [x] Ter o Node instalado;
> * [x] Ter um editor de código de sua preferência;
> * [x] Clone o repositório por meio do comando abaixo;
> ``` shell
> # Clone
> git clone https://github.com/giovanesouza/node-pizzeria.git
> 
> # Mude para a branch abaixo
> git checkout 3-mongodb-auth
> 
> ```
> * [x] Baixe as dependências do projeto utilizando o comando: `npm install`;
> * [x] Utilize uma ferramenta que possibilite realizar todos os tipos requisições como o `Postman`, `Insomnia` ou uma extensão chamada `Thunder Client` que possibilita realizar as requisições dentro do **VS CODE**.
> * [x] Execute o programa utilizando o comando: `npm start`;


## Sobre o projeto

Consiste em um CRUD para usuários, utilizando o Node/Express, com a arquitetura de projetos no padrão MVC, com persistência de dados utilizando o MongoDB - Banco de dados NoSQL.

### Implementações

* Padrão MVC;
* Conexão com o banco via mongoose
* Token JWT


### Rotas disponíveis

* Inicializa a aplicação - **GET**: `http://localhost:3000/` 

* Cria um usuário - **POST**: `http://localhost:3000/users/create`


```json

// Dados obrigatórios ao cadastrar usuário - inserir no corpo da requisição

    {
        "nome": "",
        "cpf": "",
        "telefone": "",
        "dataNasc": "",
        "email": "",
        "senha": ""
    }

```

* Lista um usuário - **GET**: `http://localhost:3000/users/find/:id`
* Lista todos os usuário cadastrados - **GET**: `http://localhost:3000/users/findAll`
* Atualiza um registro - **PUT**: `http://localhost:3000/users/update/:id`

```json

// Dados obrigatórios ao atualizar registro - inserir no corpo da requisição

    {
        "nome": "",
        "cpf": "",
        "telefone": "",
        "dataNasc": "",
        "email": "",
        "senha": ""
    }

```

* Exclui um registro - **DELETE**: `http://localhost:3000/users/delete/:id`
* Login (Gera um token para realizar o login) - **POST**: `http://localhost:3000/users/login`

```json

// Dados obrigatórios ao realizar login - inserir no corpo da requisição

    {
        "email": "",
        "senha": ""
    }

```

* Validador de Token (Verifica se o token é válido) - **GET**: `http://localhost:3000/validar-token`



## Resultados obtidos

