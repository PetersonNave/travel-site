const express = require('express');
const mysql = require('mysql');
const cors = require('cors');


//const mysql = require('mysql');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cadastro'
});

// Iniciando o app.
const app = express();

app.use(cors());

// Criando uma rota GET que retorna os dados da tabela usuários.
app.get('/places', function (req, res) {
    // Conectando ao banco.
    connection.getConnection(function (err, connection) {
    
    // Executando a query MySQL (selecionar todos os dados da tabela usuário).
    connection.query('SELECT * FROM places', function (error, results, fields) {
      // Caso ocorra algum erro, não irá executar corretamente.if (error) throw error;
      
      // Pegando a 'resposta' do servidor pra nossa requisição. Ou seja, aqui ele vai mandar nossos dados.
      res.send(results)
    });
  });
});

// Iniciando o servidor.
app.listen(3001, () => {
  console.log('Vai no navegador e entra em http://localhost:3000/places pra ver os usuários cadastrados.');
});
