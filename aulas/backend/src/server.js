const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();

/*
mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-ay1vo.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
*/

/* BANCO DE DADOS LOCAL NA MÁQUINA*/

mongoose.connect('mongodb://localhost:27017/omnistack9', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})


// req.query = Acessar query params (para filtros)
// req.params = Acessar route params (para edição, delete)
// req.body = Acessar corpo da requisição (para criação, edição)

app.use(express.json());
app.use(routes);


app.listen(3333);