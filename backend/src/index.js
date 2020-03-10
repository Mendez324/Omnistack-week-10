const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://Mendes:freixo324@cluster0-qkema.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

//Metodos http: get post put delete

//Tipos de paramentros::
//Query param: request.query (Filtros,ordenação, paginação)
//Route param: request.params ( identificar um recurso na alteraç]ao ao remoç]ao)
//Body: request.body ( dados para craição ou alteraç]ao de registo)

//MongoDB (Não relacional)


