const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3333

mongoose.connect('mongodb+srv://devfinder:15315300@cluster0-z3yzk.azure.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(PORT, () => console.log(`Rodando na porta ${ PORT }`));