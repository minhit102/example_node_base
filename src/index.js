const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = 3000;


const route = require('./routes');
const handleBars = require('express-handlebars');

const db  = require('./config/db/connectDB');
db.connect();
app.engine('hbs', handleBars.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
app.use(morgan('combined'));

app.use(express.urlencoded());
app.use(express.json());

/*app.get('/', function (req, res) {
  res.send('Hello World')
})*/
app.use(express.static(path.join(__dirname, 'public')));

route(app);

app.listen(3000, () => console.log(`http://localhost:${port}`));
