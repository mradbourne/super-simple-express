const express = require('express');
const path = require('path');
const index = require('./routes/index');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', index);

app.listen(3000);
