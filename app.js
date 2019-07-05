const express = require('express');
const PORT = 3000;
const app = express();
const db = require('./config/database');
const bodyParser = require('body-parser');
const cors = require('cors');

const index = require('./routes/index');
const clientes = require('./routes/clientes');

db.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error: ' + err))

app.set("json spaces", 4);
app.use(bodyParser.json());
app.use(cors({
    origin: ['http://localhost:4200'],
    methods: ["GET", "PUT", "POST", "DELETE"]
}));

app.use('/', index);
app.use('/clientes', clientes);

app.listen(PORT, () => console.log("escutando na porta " + PORT));
