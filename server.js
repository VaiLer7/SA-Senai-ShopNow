const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql2');
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const path = require('path');
app.use('/img/assets', express.static('assets'));
app.use('/img/imgProdutos', express.static('imgProdutos'));
app.use('/img/imgPromoções', express.static('imgPromoções'));
app.use('/img/imgRedesSociais', express.static('imgRedesSociais'));
app.use('/img/UserPictures', express.static('UserPictures'));
app.use('/img', express.static('img'));
app.use('/css', express.static('css'));
app.use('/css/User', express.static('css_User'));
app.use('/js', express.static('js'));
app.use('/html', express.static('html'));
app.use('/html/Carrinho', express.static('Carrinho'));
app.use('/html/User', express.static('User'));


const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'sa_shopnow',
});

connection.connect(function (err) {
  if (!err){
    console.log("Conexão como o Banco realizada com sucesso!!!");
  } else{
    console.log("Erro: Conexão NÃO realizada", err);
  }
});


app.post('/cadastro', (req, res) => {
  let nome = req.body.nomecad;
  let email = req.body.emailcad;
  let senha = req.body.senhacad;
  let sobrenome = req.body.sobrenomecad;
  let confsenha = req.body.reqsenhacad;
  let telefone = req.body.telefonecad;

  if (senha !== confsenha) {
    res.send('As senhas são diferentes');
    console.log('Senhas incompatíveis:', senha, confsenha);
  } else {
    connection.query(
      'INSERT INTO usuario (email, senha, nome, sobrenome, telefone) VALUES (?, ?, ?, ?, ?)',
      [email, senha, nome, sobrenome, telefone],
      function (err, rows, fields) {
        if (!err) {
          console.log('Registro inserido com sucesso!');
          res.send('Registro feito :)');
        } else {
          console.log('Erro ao inserir registro:', err);
          res.send('Não foi possível fazer o registro');
        }
      }
    );
  }
});


app.post('/login', (req, res) => {
  let email = req.body.emaillog;
  let senha = req.body.senhalog;
 
  connection.query("SELECT * FROM usuario WHERE Email = '" + email + "'" , function (err, rows, fields) {
   console.log("Results:", rows);
   if (!err) {
   if (rows.length > 0) {
     if ( rows[0].Senha === senha) {
       res.send('Login com Sucesso!!!');
     } else {
       res.send('Senha incorreta');
       console.log("Results:", rows[0].Senha);
       console.log("Results:", senha);
     }
   } else {
     res.send('Login Falhou - Email não cadastrado');
   }
   } else {
     console.log("Erro: Consulta não realizada", err);
     res.send('Login failed');
   }
 });
});



app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000!')
})