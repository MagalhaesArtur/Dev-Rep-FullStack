<h1 align="center">
    Dev-Repositórios (Full-Stack)
</h1>

<h1 align="center">Funcionalidades 🔧</h1>
<ul>
    <li>Aplicação que conta com sistema de login e autenticação JWT integrada com um banco de dados.
     O usuário que tem uma conta pré cadastrada no banco de dados, pode fazer o login, gerando um token, que expira depois de um tempo. Quando logado, o usuário pode inserir os links dos seus repositórios no GitHub, e a aplicação irá armazenar o nome e o dono do repositório no banco de dados(MongoDB). Vale lembrar que o sistema também conta uma criptografia não reversível de senhas, oferecendo mais segurança caso o banco seja invadido ou algo do tipo.</li>
</ul><br><br>

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
