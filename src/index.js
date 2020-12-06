const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const routes = require('./routes/routes.js');

const app = express();

var corsOptions = 
  {
    origin: "http://localhost:8081" 
  };

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(routes);

app.use(bodyParser.urlencoded({ extended: true }));

const database = require('./models');
database.sequelize.sync();

require('./routes/routes')(app);

const PORT = process.env.PORT || 8080;
  
app.listen(PORT, () => 
  {
    console.log("Servidor está logado na porta ${PORT}.")
  });

