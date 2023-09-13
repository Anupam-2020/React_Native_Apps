const express = require('express');
require('./db/connect');
const bodyParser = require('body-parser');
const cors = require('cors');
const loginRouter = require('./controller/loginController');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(loginRouter.router);

app.listen(3000)