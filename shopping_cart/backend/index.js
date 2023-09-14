const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const database = require('../backend/db/connect');
const loginRouter = require('./routes/loginRegister');

const app = express();
const PORT = 8000;


app.use(cors());

app.use(loginRouter);


app.listen(PORT, () => {
    database();
    console.log(`Server started on port ${PORT}`)
})