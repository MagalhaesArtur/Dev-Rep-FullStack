<h1 align="center">
    Dev-Repositórios (Full-Stack)
</h1>

<h1 align="center">Funcionalidades 🔧</h1>
<ul>
    <li>Aplicação que conta com sistema de login e autenticação JWT integrada com um banco de dados.
     O usuário que tem uma conta pré cadastrada no banco de dados, pode fazer o login, gerando um token, que expira depois de um tempo. Quando logado, o usuário pode inserir os links dos seus repositórios no GitHub, e a aplicação irá armazenar o nome e o dono do repositório no banco de dados(MongoDB). Vale lembrar que o sistema também conta uma criptografia não reversível de senhas, oferecendo mais segurança caso o banco seja invadido ou algo do tipo.</li>
</ul><br><br>

## :rocket: Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

✔️React

✔️React Router DOM

✔️Axios

✔️React Context

✔️Prettier

✔️React Hooks

✔️Node JS

✔️MongoDD

##

<h2 align="center">
    Back-End
</h2>

## 🔧 Demonstração do Funcionamento

<img src="./assets/App.png" alt="App.Js">
<p> Parte Central do Servidor </p>

<br>

<img src="./assets/Routes.png" alt="Routes.Js">
<p> Integração das rotas e Controllers </p>

<br>

<img src="./assets/jwtVerify.png" alt="jwt.Js">
<p> Verificação do token, se não for válido, a aplicação não permite o acesso do usuário a página principal. </p>

<br>

<img src="./assets/jwtCreate.png" alt="jwt.Js">
<p> Criação do token, que é requisitada quando o usuário faz login no front-end </p>

<br>

<img src="./assets/repo.png" alt="repo.Js">
<p> Controlador dos Repositórios, com os métodos de criação, deleção e listagem </p>

<br>

<img src="./assets/cryp.png" alt="cryp.Js">
<p> Funções que fazem a criptografia e a comparação dos dados quando o usuário faz login.</p>

##

<h2 align="center">
    Front-End Feito em React
</h2>

<br>

<img src="./assets/login.gif" alt="login">
<p>Fazendo o login, lembrando que o usuário já está pré-cadastrado no banco de dados.</p>

<br>

<img src="./assets/rep.gif" alt="repo">
<p>Acessando os repositórios do usuário, lembrando que cada usuário só pode ver os seus repositórios. Outros usuários não podem ver os repositórios que nao sejam seus.</p>

<br>

<img src="./assets/logout.gif" alt="logout">
<p>Fazendo o Log Out, limpando o localstorage. Lembrando que o usuário só pode acessar a página principal se estiver logado e com um token válido, como podemos ver no gif.</p>

##

<h1 align="center">O que aprendi 👨‍💻</h1>
<ul>
    <li>Melhor Entendimento do ReactJS no geral </li>
    <li>Uso efetivo de hooks</li>
    <li>Integração front-end/back-end na prática</li>
    <li>Axios para o consumo da API criada com NodeJS</li>
    <li>React Router DOM para o uso de rotas single-page </li>
    <li>Uso efetivo e prático do login jwt</li>
     <li>Uso efetivo e prático da criptografia de dados</li>
   
   
</ul><br><br>
