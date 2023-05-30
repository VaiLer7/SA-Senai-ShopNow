const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql2');
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'SAEP'
});

connection.connect(function (err) {
  console.log("Conexão como o Banco realizada com sucesso!!!")
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/html/Home.html')
})
 
app.post('/login', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    connection.query("SELECT * FROM ator where nome = XXXXXXXX", function (err, rows, fields) {
      if (!err){
          console.log("Resultado:",rows );
      } else{
          console.log("Erro: Consulta não realizada", err);
      }
    });

    if (username === 'admin' && 
    password === 'admin') {
        res.send('Login successful');
    }
    else {
        res.send('Login failed');
    }
})
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000!')
})
