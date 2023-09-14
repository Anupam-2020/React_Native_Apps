const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const database = require('../backend/db/connect');
const app = express();
const PORT = 8000;

app.use(cors());


app.listen(PORT, () => {
    database();
    console.log(`Server started on port ${PORT}`)
})