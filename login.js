app.post('/login', (req, res) => {
   let email = req.body.email;
   let password = req.body.password;
  
   connection.query("SELECT * FROM usuario WHERE Email = '" + email + "'" , function (err, rows, fields) {
    console.log("Results:", rows);
    if (!err) {
    if (rows.length > 0) {
      if ( rows[0].senha === password) {
        res.send('Login com Sucesso!!!');
      } else {
        res.send('Senha incorreta');
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